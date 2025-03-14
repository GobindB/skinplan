import { NextRequest, NextResponse } from "next/server";
import Airtable from 'airtable';
import { isValidEmail } from '../../utils/validation';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('Received request body:', body);

        const { email, skinType, ethnicity, selectedConcerns, sensitivities, currentProducts } = body;
        
        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ success: false, message: "Please enter a valid email address" }, { status: 400 });
        }

        // Format the notes field
        const notes = `
Skin Type: ${skinType || 'Not specified'}
Ethnicity: ${ethnicity || 'Not specified'}
Concerns: ${selectedConcerns?.join(', ') || 'None'}
Sensitivities: ${sensitivities?.join(', ') || 'None'}
Current Products: ${currentProducts?.join(', ') || 'None'}
        `.trim();

        console.log('Creating Airtable record with:', {
            email,
            Notes: notes,
            Source: 'Custom Plan Form'
        });

        // Create the record in Airtable with correct field names
        const record = await base('Emails').create({
            email: email,
            Notes: notes,
            Source: 'Custom Plan Form'
        });

        console.log('Successfully created Airtable record:', record.id);
        return NextResponse.json({ success: true, id: record.id });
    } catch (error: unknown) {
        console.error("Error submitting to Airtable:", error);
        if (error instanceof Error) {
            return NextResponse.json({ 
                success: false, 
                message: error.message,
                details: error.stack 
            }, { status: 500 });
        }
        return NextResponse.json({ 
            success: false, 
            message: "An unknown error occurred",
            details: String(error)
        }, { status: 500 });
    }
}

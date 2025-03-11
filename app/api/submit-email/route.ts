import { NextRequest, NextResponse } from "next/server";
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: NextRequest) {
    try {
        const { email, skinType, ethnicity, selectedConcerns, sensitivities, currentProducts } = await req.json();
        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
        }

        // Format the notes field
        const notes = `
Skin Type: ${skinType || 'Not specified'}
Ethnicity: ${ethnicity || 'Not specified'}
Concerns: ${selectedConcerns?.join(', ') || 'None'}
Sensitivities: ${sensitivities?.join(', ') || 'None'}
Current Products: ${currentProducts?.join(', ') || 'None'}
        `.trim();

        // Create the record in Airtable with correct field names
        const record = await base('Emails').create({
            email: email,
            Notes: notes,
            Source: 'Custom Plan Form'
        });

        return NextResponse.json({ success: true, id: record.id });
    } catch (error: unknown) {
        console.error("Error submitting to Airtable:", error);
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        }
        return NextResponse.json({ success: false, message: "An unknown error occurred" }, { status: 500 });
    }
}

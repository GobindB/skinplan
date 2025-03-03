import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
        }

        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
        const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;

        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
        
        console.log("Sending request to:", url);
        console.log("With API Key:", AIRTABLE_API_KEY ? "Exists" : "Missing");
        console.log("Email Data:", email);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                records: [{ fields: { email: email } }]
            }),
        });

        const responseData = await response.json();
        console.log("Airtable Response:", responseData);

        if (!response.ok) {
            throw new Error(`Airtable API Error: ${JSON.stringify(responseData)}`);
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: unknown) {
        console.error("Error submitting to Airtable:", error);
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: error.message }, { status: 500 });
        }
        return NextResponse.json({ success: false, message: "An unknown error occurred" }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
        }

        // Try Supabase if configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && supabaseUrl !== 'your_supabase_project_url') {
            const { createClient } = await import('@supabase/supabase-js');
            const supabase = createClient(supabaseUrl, supabaseKey);

            const { error } = await supabase.from('contact_messages').insert({
                name: body.name,
                email: body.email,
                company: body.company || null,
                phone: body.phone || null,
                message: body.message,
            });

            if (error) {
                console.error('Supabase error:', error);
                return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
            }
        }

        return NextResponse.json({ success: true, message: 'Message received!' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

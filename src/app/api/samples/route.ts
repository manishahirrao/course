import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category'); // Filter by category
        const limit = searchParams.get('limit'); // Limit results

        // If Supabase is not configured, return mock data
        if (!isSupabaseConfigured()) {
            return NextResponse.json({
                success: true,
                data: getMockSamples(category, limit ? parseInt(limit) : undefined),
                message: 'Using mock data - Supabase not configured'
            });
        }

        // Build query
        const supabase = getSupabaseClient();
        let query = supabase
            .from('content_samples')
            .select('*')
            .order('created_at', { ascending: false });

        // Apply filters
        if (category) {
            query = query.eq('category', category);
        }

        if (limit) {
            query = query.limit(parseInt(limit));
        }

        const { data, error } = await query;

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ 
                success: false, 
                error: 'Failed to fetch content samples' 
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            data: data || [],
            count: data?.length || 0
        });

    } catch (error) {
        console.error('Content samples API error:', error);
        return NextResponse.json({ 
            success: false, 
            error: 'Internal server error' 
        }, { status: 500 });
    }
}

// Mock data for when Supabase is not configured
function getMockSamples(category?: string | null, limit?: number) {
    const mockSamples = [
        {
            id: '1',
            title: 'Banking Exam Samples',
            category: 'banking',
            file_url: '/samples/banking-sample.pdf',
            description: 'IBPS PO, SBI Clerk & RBI Grade B practice sets with solutions',
            download_count: 1250,
            created_at: '2024-01-01T00:00:00Z'
        },
        {
            id: '2',
            title: 'SSC Exam Samples',
            category: 'ssc',
            file_url: '/samples/ssc-sample.pdf',
            description: 'SSC CGL, CHSL & MTS previous year questions topic-wise',
            download_count: 980,
            created_at: '2024-01-02T00:00:00Z'
        },
        {
            id: '3',
            title: 'CBSE Content Samples',
            category: 'cbse',
            file_url: '/samples/cbse-sample.pdf',
            description: 'Class 6-12 Maths & Science chapter notes and worksheets',
            download_count: 750,
            created_at: '2024-01-03T00:00:00Z'
        },
        {
            id: '4',
            title: 'JEE Main Sample Papers',
            category: 'jee',
            file_url: '/samples/jee-sample.pdf',
            description: 'Physics, Chemistry & Mathematics practice papers with solutions',
            download_count: 1100,
            created_at: '2024-01-04T00:00:00Z'
        },
        {
            id: '5',
            title: 'NEET Sample Questions',
            category: 'neet',
            file_url: '/samples/neet-sample.pdf',
            description: 'Biology, Physics & Chemistry MCQs for NEET preparation',
            download_count: 890,
            created_at: '2024-01-05T00:00:00Z'
        }
    ];

    let filteredSamples = mockSamples;

    // Apply category filter
    if (category) {
        filteredSamples = filteredSamples.filter(s => s.category === category);
    }

    // Apply limit
    if (limit) {
        filteredSamples = filteredSamples.slice(0, limit);
    }

    return filteredSamples;
}
import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ 
                success: false, 
                error: 'Sample ID is required' 
            }, { status: 400 });
        }

        // If Supabase is not configured, return mock response
        if (!isSupabaseConfigured()) {
            return NextResponse.json({
                success: true,
                message: 'Download tracked (mock mode)',
                download_count: Math.floor(Math.random() * 1000) + 500
            });
        }

        // Increment download count using RPC or separate query
        // First get current count
        const { data: currentData, error: fetchError } = await supabase
            .from('content_samples')
            .select('download_count')
            .eq('id', id)
            .single();

        if (fetchError) {
            if (fetchError.code === 'PGRST116') {
                return NextResponse.json({ 
                    success: false, 
                    error: 'Sample not found' 
                }, { status: 404 });
            }
            console.error('Supabase fetch error:', fetchError);
            return NextResponse.json({ 
                success: false, 
                error: 'Failed to fetch sample' 
            }, { status: 500 });
        }

        // Update with incremented count
        const newCount = (currentData?.download_count || 0) + 1;
        const { data, error } = await supabase
            .from('content_samples')
            .update({ download_count: newCount })
            .eq('id', id)
            .select('download_count')
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json({ 
                    success: false, 
                    error: 'Sample not found' 
                }, { status: 404 });
            }
            console.error('Supabase error:', error);
            return NextResponse.json({ 
                success: false, 
                error: 'Failed to track download' 
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: 'Download tracked successfully',
            download_count: data?.download_count || 0
        });

    } catch (error) {
        console.error('Download tracking API error:', error);
        return NextResponse.json({ 
            success: false, 
            error: 'Internal server error' 
        }, { status: 500 });
    }
}
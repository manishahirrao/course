import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json({ 
                success: false, 
                error: 'Product slug is required' 
            }, { status: 400 });
        }

        // If Supabase is not configured, return mock data
        if (!isSupabaseConfigured()) {
            const mockProduct = getMockProductBySlug(slug);
            if (!mockProduct) {
                return NextResponse.json({ 
                    success: false, 
                    error: 'Product not found' 
                }, { status: 404 });
            }
            return NextResponse.json({
                success: true,
                data: mockProduct,
                message: 'Using mock data - Supabase not configured'
            });
        }

        const { data, error } = await getSupabaseClient()
            .from('products')
            .select('*')
            .eq('slug', slug)
            .eq('is_active', true)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                return NextResponse.json({ 
                    success: false, 
                    error: 'Product not found' 
                }, { status: 404 });
            }
            console.error('Supabase error:', error);
            return NextResponse.json({ 
                success: false, 
                error: 'Failed to fetch product' 
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            data: data
        });

    } catch (error) {
        console.error('Product API error:', error);
        return NextResponse.json({ 
            success: false, 
            error: 'Internal server error' 
        }, { status: 500 });
    }
}

// Mock data for when Supabase is not configured
function getMockProductBySlug(slug: string) {
    const mockProducts = [
        {
            id: '1',
            title: 'Banking Study Material',
            slug: 'ibps-po-study-material',
            category: 'study-materials',
            exam_type: 'IBPS, SBI, RBI',
            description: 'Complete study materials for all banking exams with PYQs and practice papers',
            badge: 'Bestseller',
            icon: '🏦',
            features: [
                'Quantitative Aptitude Shortcuts',
                'Logical Reasoning Modules',
                'English Language & Grammar',
                'Banking Awareness Notes',
                '150+ Mock Tests',
                'Previous Year Papers'
            ],
            price: 2999,
            is_active: true,
            created_at: '2024-01-01T00:00:00Z'
        },
        {
            id: '2',
            title: 'SSC Study Material',
            slug: 'ssc-cgl-study-material',
            category: 'study-materials',
            exam_type: 'CGL, CHSL, MTS',
            description: 'Comprehensive SSC exam preparation materials with detailed solutions',
            badge: 'Popular',
            icon: '🏛️',
            features: [
                'General Intelligence & Reasoning',
                'Quantitative Aptitude',
                'English Comprehension',
                'General Awareness',
                '100+ Practice Sets',
                'Solved Papers'
            ],
            price: 2499,
            is_active: true,
            created_at: '2024-01-02T00:00:00Z'
        },
        {
            id: '3',
            title: 'CBSE Class 6-12',
            slug: 'cbse-class-6-12-study-material',
            category: 'study-materials',
            exam_type: 'All Subjects',
            description: 'NCERT-aligned study materials for Classes 6-12 covering all subjects',
            badge: 'New',
            icon: '📚',
            features: [
                'Mathematics',
                'Science',
                'Social Studies',
                'English',
                'Hindi',
                'Chapter-wise Notes',
                'Worksheets'
            ],
            price: 1999,
            is_active: true,
            created_at: '2024-01-03T00:00:00Z'
        },
        {
            id: '4',
            title: 'IIT-JEE Study Material',
            slug: 'jee-main-study-material',
            category: 'study-materials',
            exam_type: 'Main & Advanced',
            description: 'Complete JEE preparation with Physics, Chemistry, and Mathematics',
            badge: 'Premium',
            icon: '⚙️',
            features: [
                'Physics - Mechanics to Modern',
                'Chemistry - Organic & Inorganic',
                'Mathematics - Calculus to Algebra',
                'Previous Year Solutions',
                'Mock Test Series'
            ],
            price: 3999,
            is_active: true,
            created_at: '2024-01-04T00:00:00Z'
        },
        {
            id: '5',
            title: 'Banking Mock Tests',
            slug: 'banking-mock-tests',
            category: 'mock-tests',
            exam_type: 'IBPS, SBI, RBI',
            description: 'Full-length mock tests for all banking exams with detailed solutions',
            badge: 'Bestseller',
            icon: '🏦',
            features: [
                '150+ Full Length Tests',
                'Sectional Tests',
                'PYQ-based Tests',
                'Detailed Solutions',
                'Performance Analytics'
            ],
            price: 1499,
            is_active: true,
            created_at: '2024-01-05T00:00:00Z'
        },
        {
            id: '6',
            title: 'SSC Mock Tests',
            slug: 'ssc-mock-tests',
            category: 'mock-tests',
            exam_type: 'CGL, CHSL, MTS',
            description: 'Comprehensive mock test series for SSC exams',
            badge: 'Popular',
            icon: '🏛️',
            features: [
                '100+ Full Length Tests',
                'Topic-wise Tests',
                'Previous Year Pattern',
                'Bilingual Support',
                'Score Analysis'
            ],
            price: 1299,
            is_active: true,
            created_at: '2024-01-06T00:00:00Z'
        }
    ];

    return mockProducts.find(p => p.slug === slug) || null;
}
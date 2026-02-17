import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const categoryData: Record<string, {
    title: string;
    icon: string;
    description: string;
    sections: { title: string; topics: string[] }[];
}> = {
    academics: {
        title: 'Academics',
        icon: '🎓',
        description: 'Complete NCERT-aligned study materials for CBSE, ICSE, and State Boards — Classes 6 through 12.',
        sections: [
            { title: 'Mathematics', topics: ['Number Systems', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Calculus'] },
            { title: 'Science', topics: ['Physics', 'Chemistry', 'Biology', 'Environmental Science', 'Lab Practicals'] },
            { title: 'Social Studies', topics: ['History', 'Geography', 'Civics', 'Economics', 'Political Science'] },
            { title: 'Languages', topics: ['English Grammar', 'English Literature', 'Hindi Grammar', 'Hindi Literature'] },
        ],
    },
    'competitive-exams': {
        title: 'Competitive Exams',
        icon: '🏆',
        description: 'Comprehensive study materials and mock tests for all major competitive exams in India — Banking, SSC, Railways, and more.',
        sections: [
            { title: 'Banking Exams', topics: ['IBPS PO/Clerk', 'SBI PO/Clerk', 'RBI Grade B', 'RRB Officer', 'NABARD', 'SEBI'] },
            { title: 'SSC Exams', topics: ['SSC CGL', 'SSC CHSL', 'SSC MTS', 'SSC CPO', 'SSC Stenographer'] },
            { title: 'Railway Exams', topics: ['RRB NTPC', 'RRB Group D', 'RRB JE', 'RRB ALP'] },
            { title: 'Engineering', topics: ['JEE Main', 'JEE Advanced', 'GATE', 'ESE'] },
        ],
    },
    'computer-science': {
        title: 'Computer Science',
        icon: '💻',
        description: 'Programming, data structures, algorithms, and IT certification preparation materials for students and professionals.',
        sections: [
            { title: 'Programming', topics: ['C/C++', 'Java', 'Python', 'JavaScript', 'Data Types', 'Control Flow'] },
            { title: 'Data Structures', topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Hash Tables', 'Heaps'] },
            { title: 'Web Development', topics: ['HTML/CSS', 'React', 'Node.js', 'Databases', 'REST APIs', 'DevOps'] },
            { title: 'Theory', topics: ['OS Concepts', 'DBMS', 'Computer Networks', 'Software Engineering', 'Algorithms'] },
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(categoryData).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const { category } = await params;
    const data = categoryData[category];
    if (!data) return { title: 'Not Found' };
    return {
        title: `${data.title} Content Coverage | Continue Labs`,
        description: data.description,
    };
}

export default async function ContentCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const data = categoryData[category];
    if (!data) notFound();

    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{data.icon}</div>
                    <h1 className="heading-xl">
                        <span className="text-gradient">{data.title}</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>
                        {data.description}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '32px' }}>
                        {data.sections.map((section) => (
                            <div key={section.title} className="card" style={{ padding: '32px' }}>
                                <h3 className="heading-md" style={{ marginBottom: '16px' }}>{section.title}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {section.topics.map((topic) => (
                                        <div key={topic} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                                            <span style={{ color: 'var(--accent-blue)', fontSize: '0.75rem' }}>●</span>
                                            {topic}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Get {data.title}{' '}
                        <span className="text-gradient">Content for Your Platform</span>
                    </h2>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                        <Link href="/content-coverage" className="btn btn-secondary btn-lg">All Categories</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

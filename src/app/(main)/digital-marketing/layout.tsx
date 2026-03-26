import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing Services | IT Solutions | Contenu Labs',
    description: 'Comprehensive digital marketing, web development, app development, SEO, branding and design services by Contenu Labs.',
};

export default function DigitalMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

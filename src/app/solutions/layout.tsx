
import type { Metadata } from 'next';
import SolutionsPage from './page';

export const metadata: Metadata = {
    title: 'White-Label Education Solutions | Study Materials & Tests | Contenu Labs',
    description: 'Comprehensive white-label education content solutions including competitive exam materials and academic curriculum support.',
};

export default function SolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

import { useState, useEffect } from 'react';

export interface ContentSample {
    id: string;
    title: string;
    category: string;
    file_url?: string;
    description: string;
    download_count: number;
    created_at: string;
}

export interface SamplesResponse {
    success: boolean;
    data: ContentSample[];
    count: number;
    message?: string;
}

export interface UseSamplesOptions {
    category?: string;
    limit?: number;
}

export function useSamples(options: UseSamplesOptions = {}) {
    const [samples, setSamples] = useState<ContentSample[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSamples = async () => {
            try {
                setLoading(true);
                setError(null);

                const params = new URLSearchParams();
                if (options.category) params.append('category', options.category);
                if (options.limit) params.append('limit', options.limit.toString());

                const response = await fetch(`/api/samples?${params.toString()}`);
                const result: SamplesResponse = await response.json();

                if (result.success) {
                    setSamples(result.data);
                } else {
                    setError(result.message || 'Failed to fetch samples');
                }
            } catch (err) {
                setError('Network error occurred');
                console.error('Samples fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSamples();
    }, [options.category, options.limit]);

    return { samples, loading, error };
}

export async function trackDownload(sampleId: string): Promise<boolean> {
    try {
        const response = await fetch(`/api/samples/download/${sampleId}`, {
            method: 'POST',
        });
        
        const result = await response.json();
        return result.success;
    } catch (error) {
        console.error('Download tracking error:', error);
        return false;
    }
}
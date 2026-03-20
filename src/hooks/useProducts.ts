import { useState, useEffect } from 'react';

export interface Product {
    id: string;
    title: string;
    slug: string;
    category: 'study-materials' | 'mock-tests';
    exam_type: string;
    description: string;
    badge?: 'Bestseller' | 'Popular' | 'New' | 'Premium';
    icon: string;
    features: string[];
    price: number;
    is_active: boolean;
    created_at: string;
}

export interface ProductsResponse {
    success: boolean;
    data: Product[];
    count: number;
    message?: string;
}

export interface UseProductsOptions {
    category?: 'study-materials' | 'mock-tests';
    examType?: string;
    limit?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const params = new URLSearchParams();
                if (options.category) params.append('category', options.category);
                if (options.examType) params.append('examType', options.examType);
                if (options.limit) params.append('limit', options.limit.toString());

                const response = await fetch(`/api/products?${params.toString()}`);
                const result: ProductsResponse = await response.json();

                if (result.success) {
                    setProducts(result.data);
                } else {
                    setError(result.message || 'Failed to fetch products');
                }
            } catch (err) {
                setError('Network error occurred');
                console.error('Products fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [options.category, options.examType, options.limit]);

    return { products, loading, error };
}

export function useProduct(slug: string) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`/api/products/${slug}`);
                const result = await response.json();

                if (result.success) {
                    setProduct(result.data);
                } else {
                    setError(result.error || 'Failed to fetch product');
                }
            } catch (err) {
                setError('Network error occurred');
                console.error('Product fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    return { product, loading, error };
}
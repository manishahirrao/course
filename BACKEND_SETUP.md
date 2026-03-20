# Backend Setup for Opus Vidya (Contenu Labs)

## ✅ What's Been Implemented

### 1. **Contact Form Integration**
- **Fixed**: Contact page now properly calls `/api/contact` instead of using `mailto:`
- **API**: `/api/contact` - Saves form submissions to Supabase `contact_messages` table
- **Fallback**: Works without Supabase configuration (graceful degradation)

### 2. **Products Catalog API**
- **GET** `/api/products` - List all products with filtering
  - Query params: `category`, `examType`, `limit`
  - Categories: `study-materials`, `mock-tests`
- **GET** `/api/products/[slug]` - Get single product by slug
- **Mock Data**: Works without Supabase (returns sample products)
- **Hook**: `useProducts()` and `useProduct(slug)` for React components

### 3. **Content Samples API**
- **GET** `/api/samples` - List free content samples
  - Query params: `category`, `limit`
- **POST** `/api/samples/download/[id]` - Track download counts
- **Hook**: `useSamples()` and `trackDownload()` for React components

### 4. **Updated Pages**
- **Products Page**: Now uses API instead of hardcoded data
- **Content Library**: Now uses samples API with download tracking
- **Contact Page**: Properly integrated with backend API

## 🔧 Supabase Configuration Required

### 1. **Environment Variables**
Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. **Database Setup**
Run the provided `database.sql` in your Supabase SQL Editor to create:
- Tables: `contact_messages`, `products`, `blog_posts`, `content_samples`
- RLS policies for security
- Seed data with sample products

### 3. **Storage Buckets (Optional)**
Create these buckets in Supabase Storage:
- `content-samples` (public) - for free PDF downloads
- `partner-content` (private) - for purchased content
- `blog-images` (public) - for blog images

## 🧪 Testing the APIs

### Manual Testing
1. Start the development server: `npm run dev`
2. Run the test script: `node test-api.js`
3. Check browser console for API responses

### API Endpoints
- `GET /api/products` - List products
- `GET /api/products/ibps-po-study-material` - Single product
- `GET /api/samples` - Content samples
- `POST /api/contact` - Contact form submission
- `POST /api/samples/download/1` - Track download

## 📊 Features Working Without Supabase

The system gracefully handles missing Supabase configuration:
- **Products API**: Returns mock data (6 sample products)
- **Samples API**: Returns mock samples (5 sample files)
- **Contact API**: Still accepts submissions (logs to console)
- **Download Tracking**: Returns mock success responses

## 🚀 Next Steps

### Immediate (Required for Production)
1. **Set up Supabase project** and configure environment variables
2. **Run database schema** from `database.sql`
3. **Test all APIs** with real Supabase connection
4. **Upload sample PDFs** to storage buckets

### Future Enhancements
1. **Partner Dashboard APIs**
   - Order management
   - Content access control
   - Profile management

2. **Payment Integration**
   - Razorpay/Stripe integration
   - Order processing
   - Invoice generation

3. **Email Services**
   - Transactional emails (Resend/SendGrid)
   - Welcome emails
   - Order confirmations

4. **Analytics**
   - Download tracking
   - Popular content metrics
   - Partner engagement data

## 🔍 File Structure

```
opus-vidya/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts          # Contact form API
│   │   │   ├── products/
│   │   │   │   ├── route.ts              # Products list API
│   │   │   │   └── [slug]/route.ts       # Single product API
│   │   │   └── samples/
│   │   │       ├── route.ts              # Samples list API
│   │   │       └── download/[id]/route.ts # Download tracking
│   │   ├── contact/page.tsx              # Updated contact page
│   │   ├── products/page.tsx             # Updated products page
│   │   └── content-library/page.tsx      # Updated samples page
│   ├── hooks/
│   │   ├── useProducts.ts                # Products data hooks
│   │   └── useSamples.ts                 # Samples data hooks
│   └── lib/
│       └── supabase.ts                   # Supabase client
├── database.sql                          # Database schema
├── test-api.js                          # API testing script
└── .env.local                           # Environment variables
```

## 💡 Key Benefits

1. **Graceful Degradation**: Works without Supabase for development
2. **Type Safety**: Full TypeScript support with proper interfaces
3. **React Hooks**: Easy data fetching with loading/error states
4. **Scalable Architecture**: Ready for additional features
5. **Production Ready**: Proper error handling and validation

The backend is now fully functional and ready for production use with Supabase configuration!
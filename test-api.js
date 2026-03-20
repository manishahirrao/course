// Simple test script to verify API endpoints work
// Run with: node test-api.js

const BASE_URL = 'http://localhost:3000';

async function testAPI(endpoint, method = 'GET', body = null) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        const data = await response.json();
        
        console.log(`✅ ${method} ${endpoint}:`, {
            status: response.status,
            success: data.success,
            dataCount: data.data?.length || 'N/A',
            message: data.message || data.error || 'OK'
        });
        
        return data;
    } catch (error) {
        console.log(`❌ ${method} ${endpoint}:`, error.message);
        return null;
    }
}

async function runTests() {
    console.log('🧪 Testing Opus Vidya APIs...\n');
    
    // Test Products API
    console.log('📚 Testing Products API:');
    await testAPI('/api/products');
    await testAPI('/api/products?category=study-materials');
    await testAPI('/api/products?category=mock-tests');
    await testAPI('/api/products?limit=2');
    await testAPI('/api/products/ibps-po-study-material');
    await testAPI('/api/products/non-existent-product');
    
    console.log('\n📄 Testing Samples API:');
    await testAPI('/api/samples');
    await testAPI('/api/samples?category=banking');
    await testAPI('/api/samples?limit=3');
    await testAPI('/api/samples/download/1', 'POST');
    
    console.log('\n📧 Testing Contact API:');
    await testAPI('/api/contact', 'POST', {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+91 9999999999',
        message: 'This is a test message from API testing.'
    });
    
    console.log('\n✅ API testing completed!');
}

// Only run if this file is executed directly
if (require.main === module) {
    runTests().catch(console.error);
}

module.exports = { testAPI, runTests };
'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        badge: 'Featured',
        badgeClass: 'badge-blue',
        desc: 'Do you think that transforming your business digitally is complicated? Contenu Labs is here to assist you. We provide complete assistance to help organizations leverage technology and grow using digital media.',
        content: 'Our digital marketing team is dedicated to drive customer attention to your website and get the desired outcomes. We are a trusted digital marketing agency in India that really concerns for your business growth and lead generation. Our company performs tasks that matters the most for getting effective results and also, working well your unique business requirements. We help you to reach out to a whole new world in a digital manner and get to in front of the specific audience of targeted niche. We strive to entice potential consumers to visit your website and mark a digital presence. We can impeccably integrate your profile into your social strategy and get your name in front of the company you want to associate with.',
        whyTitle: 'Why Approach Us?',
        points: [
            'We will help you to get pay for clicks.',
            'We work on the right search marketing techniques.',
            'We help you to meet your prospects online wherever you are.',
            'We acquire, convert, nurture, retain and grow to help you attain your sales goals.',
        ],
    },
    {
        id: 'banner-poster',
        title: 'Banner & Poster Design',
        badge: 'Design',
        badgeClass: 'badge-orange',
        desc: 'Do you need a pop-up banner and poster for your upcoming event? Consult Contenu Labs to get the complete banner and poster designing solutions for your company\'s needs.',
        content: 'We are a leading banner and poster designing company in India that offers the widest selection of advertising banners for various ad designs, website, events and exhibitions across the globe. We design banners in all shapes, sizes, font family and colour as per your demands. Our creative graphic designers design the backdrop banners and other portable materials that will help you get noticed in the trade fair. We are also experienced in making appealing custom banners that suit your shell scheme space or other requirements. Being a consistent web designing company, we produce superb banner designs having a professional look and feel. We make certain to you that the banner and poster designs remain scalable to diverse website standards. Whether you order one or a hundred banner and poster designing, we are highly dedicated to render you effective services.',
        whyTitle: 'Why Approach Us?',
        points: [
            'We design banners and posters that can propel your business.',
            'We create attractive banners with professional designs and colorful options.',
            'We perform high-quality illustrations for professional and vector based banners.',
            'We design custom solutions based on the purpose intended to serve.',
        ],
    },
    {
        id: 'logo-design',
        title: 'Logo Design',
        badge: 'Branding',
        badgeClass: 'badge-green',
        desc: 'We think that logo is the very first component that comes into notice. Contenu Labs designs remarkable logos to represent your company.',
        content: 'When you look for the logo designing services, you need to consider a company like Contenu Labs, which designs remarkable logo to represent your company. We research thoroughly about your industry and then conceptualize to design logo that help your potential clients to associate with you. We identify different logo designs and craft a beautiful logo that will showcase real-life context and grab the attention of customers. We know that a business logo is the foundation pillar of your business marketing. We help you to provide remarkable logo designing service that will attract customers and build your brand. Our company has designed many custom logo designs for widespread clients of different domains and we are consistently praised for our work. We create logos of different sizes and stunning colors to reflect your business online. We design logos that will help you to differentiate from the start-ups or small sized businesses and develop your own identity.',
        whyTitle: 'What Are the Benefits of Logo Design?',
        points: [
            'Make your business easy to remember.',
            'Keep you stand out from the crowd.',
            'Helps in portraying professional image.',
            'Bring good return on investment.',
        ],
    },
    {
        id: 'promo-video',
        title: 'Promotional Video Making',
        badge: 'Video',
        badgeClass: 'badge-purple',
        desc: 'Promotional video making is the easiest way to develop your brand online and also, on social media.',
        content: 'Contenu Labs helps you to create promotional videos and images, and share it on different social media channels. Our company is known as quite professional and seamlessly flexible to your ever-evolving business promotion requirements. We hope you enjoy the video that we make and nurture your way to grow. We drive more sales and get more user engagement through the power of the best quality and high definition resolution videos. Having a team of expert video makers, Contenu Labs provides top-quality video making service that can meet your business goals related to social media, digital marketing, conventions, corporate event, trade shows and much more! We work on stress-free process to render useful promotional video making services. Apart from a good video making knowledge, we have ability to adapt as per your needs.',
        whyTitle: 'Why Choose Us?',
        points: [
            'Choose from 100s of designs and daily recommendations.',
            'Craft promotional and branded videos for your business.',
            'We help you share videos to all social accounts and boost your business.',
            'We customize video using your company logo, appropriate colors, text sizes and font family.',
        ],
    },
    {
        id: 'static-website',
        title: 'Static Website Design in HTML',
        badge: 'Web',
        badgeClass: 'badge-blue',
        desc: 'If you want to display the matter online and don\'t need any regular changes, then static website design in HTML is the best choice.',
        content: 'We, at Contenu Labs, offer top-notch static web site design services using HTML. Our static web designs are easy to navigate, appealing and user-friendly too. Being a leader in static website designing services in India, our company offers solutions to help you display your business details and products offerings at the top on the World Wide Web. Since static web design doesn\'t need any multi-faceted programming, database integration and related activities, we apply simple HTML and CSS techniques that can fulfil your goals and significance online. We develop browser-friendly static websites that can serve your purpose to mention details about your products. Having an experienced team of website designers, we assist you to choose your objectives rightly and get exactly what you are looking for!',
        whyTitle: 'Why Static Website Design in HTML is a Good Choice?',
        points: [
            'Simple and highly economical solution.',
            'Attractive design interface.',
            'Effective global presence.',
            'Quick enquiry to customers.',
            'Easy to describe your goal online.',
        ],
    },
    {
        id: 'whiteboard-animation',
        title: 'White Board Animation',
        badge: 'Animation',
        badgeClass: 'badge-orange',
        desc: 'White board animation is a new evolution that assists your company to clarify your message effectively.',
        content: 'At Contenu Labs, we produce white board animation that renders amazing audio-visual, lighting and staging services in the industry. We know that white board videos are a series of illustrations that can be drawn on screen. If you have a low budget to market your products online, then white board animations is the best pick. Our company can easily explain what you should market with the visual stories and also educating your customers about your work. We blend a perfect mix of Whiteboard explainer videos and animation styles to enhance its visual effect. We strive to make white board animation that can tell great stories, increase the engagement and mark a positive impact on the story.',
        whyTitle: 'Why We Are the Right Creators?',
        points: [
            'We have a talented pool of whiteboard video makers.',
            'We offer budget friendly whiteboard animation service.',
            'We can help you create an interactive video that might bring great level of engagement.',
            'We customize your video content as per your brand and business expression.',
        ],
    },
    {
        id: 'brochure-design',
        title: 'Brochure Design',
        badge: 'Design',
        badgeClass: 'badge-green',
        desc: 'Design a brochure that contributes to your sales process and help you in marketing a big success.',
        content: 'We, at Contenu Labs, are experts in designing and advertising a brochure for you that can help you to ground up to the next level. We are fully dedicated in designing a brochure that can act as an effectual sales tool for your business. From the very first droplet on the canvas to the finished brochure, we as a team put hard efforts to define your business. Our graphics designers are innovative and highly experienced in creating a brochure that can present your brand online. We know that professional brochure designing solution are considered as the cornerstone of any collateral program.',
        whyTitle: 'Why Choose Contenu Labs?',
        points: [
            'We help you present your content in the most appealing way.',
            'We work on the persuasive way and follow standard marketing principles.',
            'We are here for you from concept to completion.',
            'We strive to make you as well as your audience feel special with brochure designing.',
        ],
    },
    {
        id: 'company-profile',
        title: 'Company Profile Design',
        badge: 'Branding',
        badgeClass: 'badge-purple',
        desc: 'Whether you offer high-end product or service, you deserve world-class company profile design that matches your working style.',
        content: 'Contenu Labs will assist you in a way that make something great to happen and grab the attention of visitors. We are a leading designing agency in India that designs eye-catching company profile explaining about your brand. With Contenu Labs, your company profile design is in the right hands. We communicate to your visitors through striking and professionally designed printed company profile pieces. Our designers dexterously makes use of space, typefaces, colors and visual holds to depict what your company is all about and what distinctive characteristics it offers.',
        whyTitle: 'What are the Features of Company Profile Design?',
        points: [
            'It includes the date of your company foundation.',
            'You should mention mission, vision and goals.',
            'You need to give description of product and services offered to customers.',
            'Momentary overview of history, growth, and development.',
            'Mentioning client portfolio is a must.',
        ],
    },
    {
        id: 'news-portal',
        title: 'News Portal Development',
        badge: 'Web',
        badgeClass: 'badge-blue',
        desc: 'News portal are a good way to show news of different niche and fulfil the objective of specific business requirement.',
        content: 'Our company designs and develops a news portal that is accessible by millions of users worldwide. We know that news portal design and development is much more than a simple and yet effective website. With the help of dedicated developers, we make news portal that demands easy and simple interface due to larger user cluster. Contenu Labs is a leading web portal designing and development company in India that offers the services of news portal development to serve your business. Designing a news portal is a team work and that is what we are experts in! Having a resourceful and committed talented pool, we build solutions that can cater the entire fundamental purposes of our potential client base.',
        whyTitle: 'Why Choose Our News Portal Development Services?',
        points: [
            'We design and develop effective web portal.',
            'Strive hard to develop powerful structure.',
            'Our services are highly recognized for after sales services.',
            '100% client satisfaction is our responsibility.',
            'Work on strict deadline and quality principles.',
            '24*7 customers support is available.',
        ],
    },
    {
        id: 'software-app',
        title: 'Software & App for Business',
        badge: 'Tech',
        badgeClass: 'badge-orange',
        desc: 'Are you looking for the best custom software and unique mobile apps for your growing business? We can help you.',
        content: 'At Contenu Labs, our expert team of software and mobile app developers build scalable and secure products. We offer software and app development services for your business that help you to specify your requirements. Our company develops software and apps that might assist you to scale your business on different platforms and stay one step ahead of your competitors. Following proven development methodology and standard guidelines of coding, we design and develop products that make you market-ready jewels. We have successfully delivered many software and mobile apps to business of diverse domains.',
        whyTitle: 'Why Consider Our Developers?',
        points: [
            'Our developers are 5+ years experienced.',
            'We build scalable products.',
            'Turn your ideas into a reality.',
            'We render robust solutions.',
            'No compromise with the quality.',
            'Deploy product within the assured deadlines.',
        ],
    },
    {
        id: 'wordpress',
        title: 'WordPress Development',
        badge: 'Web',
        badgeClass: 'badge-green',
        desc: 'WordPress is an effective content management platform that is being utilized by more than 70% of the overall global websites.',
        content: 'Since WordPress is a reliable and highly flexible CMS, we design and develop a business website that could represent your brand and also improve your online visibility. Contenu Labs offers WordPress designing and development services in India and other countries using the most recent and cutting-edge technology. We ensure to our potential clients that our WordPress based websites are highly optimized for search engine marketing. Our team has worked on strict search engine and web development principles to make it fully professional and engaging. Our company offers WordPress plugin and theme development services that helps to extend the features and functionality of any website with an ease.',
        whyTitle: 'Why WordPress Development with us?',
        points: [
            'We develop website from its scratch.',
            'We understand our client\'s requirements.',
            'For us, client satisfaction is on top priority.',
            'We complete the projects in the least time possible.',
            'We never compromise on quality aspects.',
        ],
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        badge: 'Tech',
        badgeClass: 'badge-purple',
        desc: 'Mobile app development in Android and iOS has become a necessity from the past few years.',
        content: 'We design and develop interactive mobile apps in different platforms. We offer world-class mobile app development services in Android and iOS platforms for your growing business. We, at Contenu Labs, are delighted to deliver amazing Android and iOS based mobile applications that would showcase your business on mobile devices. Our committed squad of highly-skilled Android and iOS app developers has great experience in developing apps such as social gaming, e-commerce apps to other types of business apps. Transforming your ideas into a live show, we create an impressive and user-engaging mobile product.',
        whyTitle: 'Why Mobile App Development with our Experts?',
        points: [
            'We execute app development strategies perfectly.',
            'We have capability to develop user-engaging apps.',
            'We render post launching maintenance services.',
            '5+ years experienced and proficient mobile app developers.',
            'Cost effective, timely-delivered and top quality solution.',
            'We let your consumers on the go access to all your product/service offerings.',
        ],
    },
    {
        id: 'crm-erp',
        title: 'CRM & ERP Portal Development',
        badge: 'Enterprise',
        badgeClass: 'badge-blue',
        desc: 'CRM and ERP solutions are the different ways to go ahead and gain good market value.',
        content: 'CRM means Customer Relationship Management, which helps in allowing an organization to maintain its customer\'s details in a single centralized location. An organization can store the entire details either on a cloud or an in-house server. To develop a feature-rich CRM portal, consider a leading portal development company such as Contenu Labs. ERP means Enterprise Resource Planning, which helps in managing business process by automating several business operations. Contenu Labs is a trusted name in offering reliable and secure ERP portal design and development. We deliver a variety of customized ERP solutions covering many segments such as distribution, manufacturing, finance, sales, purchase, HR roles, report and analysis too.',
        whyTitle: 'Why choose us for CRM and ERP Portal Development?',
        points: [
            'We develop highly secure and user friendly solution.',
            'Design software to enhance your productivity.',
            'We work to increase customer satisfaction.',
            'Our CRM and ERP systems are highly adaptable.',
            'Our team is highly skilled in portal development.',
        ],
    },
    {
        id: 'dynamic-website',
        title: 'Dynamic Website Development',
        badge: 'Web',
        badgeClass: 'badge-orange',
        desc: 'To access a plenty of information from a large database, dynamic website is highly suitable.',
        content: 'Using dynamic website, you can easily add photos, web pages, text, videos without the need of webmaster tool. Dynamic website design and development count on both the client-side as well as server-side scripting languages including PHP and JavaScript. If you want to make a dynamic website that can give your business a new online feel, Contenu Labs is here to assist you in the best possible manner. We have mastered the art to design and develop dynamic website that can work on any platform, anywhere effortlessly. Our websites are technologically advanced and search engine friendly.',
        whyTitle: 'Benefits of Dynamic Web Design & Development',
        points: [
            'Money & Time Saving approach.',
            'Mobile friendly and optimized solution.',
            'Social integration is possible.',
            'Zero scrolling and fluid navigation.',
            'Attractive look and feel.',
            'Open the possibilities of sharing details.',
        ],
    },
    {
        id: 'voice-sms',
        title: 'Voice SMS',
        badge: 'Marketing',
        badgeClass: 'badge-green',
        desc: 'Sending voice SMS is an interesting marketing choice to engage the potential customers and make them feel valued.',
        content: 'Contenu Labs can assist you sending right voice SMS to market your products in a lucrative manner. With the help of pre-recorded messages, our company will help you to reach to your customers and easily market your products or service offerings. The best part of sending a voice SMS is that the customers are allowed to take up or hang up the call depending on their choices. We ensure you that voice SMS is the best method to keep your customers engaged.',
        whyTitle: 'Why Voice SMS Services Are Great for Marketing?',
        points: [
            'Pay only for answered call only.',
            'Fixed time operating and all nation coverage.',
            'Unlimited caller ID available.',
            'Schedule voice call and automatic repeat call is possible.',
            'Separate panel is available and live billing is facilitated.',
            'Consolidated and number wise extensive report.',
        ],
    },
    {
        id: 'smo',
        title: 'Social Media Optimization',
        badge: 'Marketing',
        badgeClass: 'badge-purple',
        desc: 'Today, social media has created a buzz in the market and is helping your business brand to grow around the clock.',
        content: 'With the help of steady steam in social media, Contenu Labs creates social media pages and runs effective social media campaigns that drive results. Our social media optimization team will assist you in managing organic and paid social campaigns that can amplify earned media and get good social response on different social media platforms. Contenu Labs is a highly distinguished social media agency in India that makes strategic social media plans and lets your growing business reach new customers. Our team has good knowledge of social media and thus, we would assist you to set up profiles and pages on various social networks to get more traffic.',
        whyTitle: 'Why Choose Us?',
        points: [
            'Get day-to-day supervision and execution of client social campaigns.',
            'Select daily content and engagement for brands on Twitter, Facebook, and Instagram.',
            'Confirm consistency of communications across compound social networks.',
            'We produce viral image and video-based content for better audio-visual effect.',
            'We provide key insights for refining programs to improve results.',
        ],
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        badge: 'SEO',
        badgeClass: 'badge-blue',
        desc: 'If you want to connect your brand with your consumers on Google, search engine optimization is the only way.',
        content: 'We have a proven experience in offering SEO services in India and other countries worldwide for improving search visibility and getting your website rank at the top position on Google. We, at Contenu Labs, increase relevant traffic on your website through SEO services. We run organic as well as paid campaigns to help you stand out from the crowd and reflect your brand. We render SEO off page, SEO on page, content writing and pay per click advertising services to make people notice you online. We have dedicated SEO experts who handle routine SEO tasks and also make right marketing plan to get website move up in the search results through relevant keywords.',
        whyTitle: 'Why SEO Services Are Important?',
        points: [
            'Primary source to generate leads.',
            'Get better user experience and client base.',
            'Higher close and conversion rates.',
            'Establish brand credibility and awareness.',
            'Improved cost management to target specific audience.',
            'Bring in customers who are actively looking for your products or services.',
        ],
    },
    {
        id: 'bulk-whatsapp',
        title: 'Bulk WhatsApp SMS Service',
        badge: 'SMS',
        badgeClass: 'badge-green',
        desc: 'With the help of bulk WhatsApp SMS service, you can enhance your brand by bestowing smart professional identity.',
        content: 'We, at Contenu Labs, help you to connect to the multiple people and multiple countries using a single interface. We are a bulk SMS marketing company in India and also providing bulk WhatsApp services nationally and internationally at affordable rates for industry promotion. Pioneers in the industry, we offer fastest delivery of Bulk WhatsApp SMS service to our clients. Our company offers a wide ranging modified SMS solutions that enable small and big entrepreneurs, industries and other non-profit organization to interact with their valuable customer base.',
        whyTitle: 'Why Choose Us?',
        points: [
            'We provide 100% SMS delivery assurance.',
            'We help you broadcast message through texts, photos and videos too.',
            'Our team creates and uploads data list to the panel and send bulk WhatsApp SMS.',
            'We assist you to create result-driven WhatsApp campaigns for users.',
        ],
    },
    {
        id: 'bulk-sms',
        title: 'Bulk SMS Service',
        badge: 'SMS',
        badgeClass: 'badge-orange',
        desc: 'Bulk SMS service can help and engage more customers for start-up businesses looking to market their products.',
        content: 'If marketing your products is the only mean you are looking for, then Contenu Labs can help you and offer you the perfect bulk SMS service. We will help you to send notifications, reminders, alerts, marketing campaigns and confirmation too. Whether you want to reach to your prospective clients or just want to connect with the people who believe in your brand, our bulk SMS service can make these efforts easier. Our company would help you to reach your target audience and convert your leads. We utilize response-based mechanism to make sure that your potential customers are engaged.',
        whyTitle: 'What Are the Features of Bulk SMS Service?',
        points: [
            'Two-Way SMS chat facility is available.',
            'Sending messages online is allowed.',
            'SMS distribution list is shown.',
            'Email to SMS Gateway is possible.',
            'SMS Software for Windows and Mac systems.',
            'SMS Gateway application programming interface.',
        ],
    },
];

export default function DigitalMarketingPage() {
    const [activeService, setActiveService] = useState<string | null>(null);

    return (
        <>
            <section style={{ padding: '80px 0 40px', background: 'var(--gradient-hero)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge badge-blue">Digital Services</span>
                    <h1 className="heading-xl" style={{ marginTop: '16px' }}>
                        Digital Marketing <span className="text-gradient">Solutions</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '750px', margin: '16px auto 0' }}>
                        Comprehensive IT, design, development, and marketing services to help your business grow digitally.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="heading-lg">Our <span className="text-gradient">Services</span></h2>
                    </div>
                    <div className="grid-3" style={{ gap: '24px' }}>
                        {services.map((svc) => (
                            <div
                                key={svc.id}
                                className="card"
                                style={{ padding: '28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'all 0.3s ease', border: activeService === svc.id ? '2px solid var(--accent-blue)' : undefined }}
                                onClick={() => setActiveService(activeService === svc.id ? null : svc.id)}
                            >
                                <span className={`badge ${svc.badgeClass}`} style={{ alignSelf: 'flex-start' }}>{svc.badge}</span>
                                <h3 className="heading-sm">{svc.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{svc.desc}</p>
                                <span style={{ color: 'var(--accent-blue-light)', fontSize: '0.875rem', fontWeight: 500, marginTop: 'auto' }}>
                                    {activeService === svc.id ? 'Collapse ↑' : 'Learn More ↓'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {activeService && (() => {
                const svc = services.find(s => s.id === activeService);
                if (!svc) return null;
                return (
                    <section className="section" style={{ background: 'var(--bg-secondary)' }} id="service-detail">
                        <div className="container">
                            <div className="grid-2" style={{ alignItems: 'start', gap: '48px' }}>
                                <div>
                                    <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                                        {svc.title}
                                    </h2>
                                    <p className="text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                        {svc.content}
                                    </p>
                                </div>
                                <div style={{
                                    background: 'var(--bg-elevated)',
                                    padding: '36px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow-lg)'
                                }}>
                                    <h3 className="heading-md" style={{ marginBottom: '20px' }}>{svc.whyTitle}</h3>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {svc.points.map((pt, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <span style={{ color: 'var(--accent-green)', fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                                                <span className="text-md" style={{ color: 'var(--text-primary)' }}>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '28px', textAlign: 'center' }}>
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })()}

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="heading-lg">
                        Ready to <span className="text-gradient">Scale?</span>
                    </h2>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Contact us today to discuss how our digital marketing and IT services can help your business grow.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '28px' }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}

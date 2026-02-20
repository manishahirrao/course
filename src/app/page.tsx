import Link from 'next/link';
import {
  BankIcon, BuildingIcon, BookIcon, AcademicCapIcon,
  CheckCircleIcon, DocumentTextIcon, CalendarIcon, UsersIcon,
  BoltIcon, RefreshIcon, ComputerIcon, VideoIcon, GlobeIcon, SparklesIcon
} from '@/components/Icons';
import styles from './page.module.css';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className={`container ${styles.heroContent} `}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <SparklesIcon width="16" height="16" />
              Contenu lab • White-Label Content Partner
            </div>
            <h1 className="heading-xl">
              Ready-Made Study Material{' '}
              <span className="text-gradient">For Your Brand</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Skip the content creation hassle. Get production-ready study material, mock tests, and question banks delivered under your brand identity.
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.featureItem}><CheckCircleIcon width="16" height="16" style={{ color: 'var(--accent-green)' }} /> Copyright Protected</div>
              <div className={styles.featureItem}><AcademicCapIcon width="16" height="16" style={{ color: 'var(--accent-blue)' }} /> Expert Authored</div>
              <div className={styles.featureItem}><RefreshIcon width="16" height="16" style={{ color: 'var(--accent-orange)' }} /> Latest Patterns</div>
            </div>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary btn-lg">Get Started</Link>
              <Link href="/content-library" className="btn btn-secondary btn-lg">View Content Library</Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* Complete Ownership + Daily Content */}
      {/* Ownership & Daily Content - Stacked Full Width */}
      <section className={styles.featureSection}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Feature 1 */}
            <div className={styles.featureText} style={{ textAlign: 'center', alignItems: 'center', background: 'var(--bg-secondary)', padding: '48px', borderRadius: '24px', width: '100%' }}>
              <div className={`badge badge-orange`} style={{ marginBottom: '16px' }}>100% Whitelabel</div>
              <h2 className="heading-lg">
                Complete Ownership.{' '}
                <span className="text-gradient">Your Brand.</span>
              </h2>
              <p style={{ marginTop: '16px', marginBottom: '24px', maxWidth: '800px' }}>
                All content comes with full usage rights. Published under your name with complete freedom. We remain completely invisible.
              </p>
              <div className={styles.featureList} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                <div className={styles.featureListItem}><CheckCircleIcon width="20" height="20" style={{ color: 'var(--accent-green)' }} /> No Recurring Royalties</div>
                <div className={styles.featureListItem}><CheckCircleIcon width="20" height="20" style={{ color: 'var(--accent-green)' }} /> Full IP Rights Transfer</div>
                <div className={styles.featureListItem}><CheckCircleIcon width="20" height="20" style={{ color: 'var(--accent-green)' }} /> Publish on Amazon/Flipkart</div>
              </div>
              <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '32px', display: 'inline-block' }}>Start Your Brand</Link>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureText} style={{ textAlign: 'center', alignItems: 'center', background: 'var(--bg-secondary)', padding: '48px', borderRadius: '24px', width: '100%' }}>
              <div className={`badge badge-blue`} style={{ marginBottom: '16px' }}>Daily Engagement</div>
              <h2 className="heading-lg">
                Daily Practice &amp;{' '}
                <span className="text-gradient">Viral Reels</span>
              </h2>
              <p style={{ marginTop: '16px', marginBottom: '24px', maxWidth: '800px' }}>
                Skip the creation hassle. We deliver professional PDF assignments and engaging Reel-style videos every single day.
              </p>
              <div className={styles.featureList} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                <div className={styles.featureListItem}><DocumentTextIcon width="20" height="20" style={{ color: 'var(--accent-blue)' }} /> Daily Practice Problems</div>
                <div className={styles.featureListItem}><VideoIcon width="20" height="20" style={{ color: 'var(--accent-blue)' }} /> Viral Educational Reels</div>
                <div className={styles.featureListItem}><CalendarIcon width="20" height="20" style={{ color: 'var(--accent-blue)' }} /> Consistent Schedule</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '32px', justifyContent: 'center' }}>
                <Link href="/solutions/daily-learning-services" className="btn btn-primary btn-lg">Explore</Link>
                <Link href="/solutions/daily-learning-services#samples" className="btn btn-secondary btn-lg">Watch Reel</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Daily News Marquee */}
      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[
                "Daily Current Affairs PDF Available Now",
                "New Bank PO Notification: 2000+ Vacancies",
                "SSC CGL Tier-1 Results Declared",
                "RBI Grade B Phase 2 Admit Cards Out",
                "CBSE Class 10 & 12 Date Sheet Released",
                "Daily Vocabulary Updates: 50 New Words Added",
                "Weekly Mock Test Challenge Live Now"
              ].map((item, i) => (
                <div key={i} className={styles.marqueeItem}>
                  <SparklesIcon className={styles.marqueeIconSvg} />
                  <div>
                    <strong>{item}</strong>
                    <span className={styles.marqueeSubtext}>Updated 2 hours ago</span>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {[
                "Daily Current Affairs PDF Available Now",
                "New Bank PO Notification: 2000+ Vacancies",
                "SSC CGL Tier-1 Results Declared",
                "RBI Grade B Phase 2 Admit Cards Out",
                "CBSE Class 10 & 12 Date Sheet Released",
                "Daily Vocabulary Updates: 50 New Words Added",
                "Weekly Mock Test Challenge Live Now"
              ].map((item, i) => (
                <div key={`dup-${i}`} className={styles.marqueeItem}>
                  <SparklesIcon className={styles.marqueeIconSvg} />
                  <div>
                    <strong>{item}</strong>
                    <span className={styles.marqueeSubtext}>Updated 2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready-to-Deploy Products */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Ready-to-Deploy{' '}
              <span className="text-gradient">Study Materials &amp; Mock Tests</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Browse our most popular white-label products trusted by 500+ coaching institutes
            </p>
          </div>
          <div className="grid-4" style={{ gap: '32px' }}>
            {[
              { icon: <BankIcon width="32" height="32" />, title: 'Banking Study Material', sub: 'IBPS, SBI, RBI', desc: 'Complete study materials for all banking exams with PYQs and practice papers', slug: 'ibps-po-study-material' },
              { icon: <BuildingIcon width="32" height="32" />, title: 'SSC Study Material', sub: 'CGL, CHSL, MTS', desc: 'Comprehensive SSC exam preparation materials with detailed solutions', slug: 'ssc-cgl-study-material' },
              { icon: <BookIcon width="32" height="32" />, title: 'CBSE Class 6-12', sub: 'All Subjects', desc: 'NCERT-aligned study materials for Classes 6-12 covering all subjects', slug: 'cbse-class-6-12-study-material' },
              { icon: <AcademicCapIcon width="32" height="32" />, title: 'IIT-JEE Study Material', sub: 'Main & Advanced', desc: 'Complete JEE preparation with Physics, Chemistry, and Mathematics', slug: 'jee-main-study-material' },
            ].map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug} className={styles.productCard}>
                <div className={styles.productIcon} style={{ marginBottom: '8px' }}>{product.icon}</div>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{product.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--accent-blue)', fontWeight: '600', marginBottom: '12px' }}>{product.sub}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>{product.desc}</p>
                </div>
                <div className={styles.viewDetails}>
                  View Details <span style={{ transition: 'transform 0.2s' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" className="btn btn-secondary btn-lg">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Preview Our Content Quality */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Preview Our{' '}
              <span className="text-gradient">Content Quality</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Download free samples to see why 500+ institutes trust our white-label content
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: <BankIcon className={styles.productIconSvg} />, title: 'Banking Exam Samples', desc: 'IBPS PO, SBI Clerk & RBI Grade B practice sets with solutions', slug: 'banking-white-label-study-materials' },
              { icon: <BuildingIcon className={styles.productIconSvg} />, title: 'SSC Exam Samples', desc: 'SSC CGL, CHSL & MTS previous year questions topic-wise', slug: 'ssc-white-label-study-materials' },
              { icon: <BookIcon className={styles.productIconSvg} />, title: 'CBSE Content Samples', desc: 'Class 6-12 Maths & Science chapter notes and worksheets', slug: 'cbse-white-label-study-materials' },
            ].map((sample) => (
              <Link href={`/ content - library / ${sample.slug} `} key={sample.slug} className={`card ${styles.sampleCard} `} style={{ padding: '28px' }}>
                <span className="badge badge-red">FREE PDF</span>
                <div className={styles.productIcon}>{sample.icon}</div>
                <h3 className="heading-sm">{sample.title}</h3>
                <span className="text-sm" style={{ color: 'var(--accent-blue-light)' }}>PDF</span>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{sample.desc}</p>
                <span className={styles.viewDetails}>View Samples</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/content-library" className="btn btn-secondary btn-lg">Browse All Sample Content</Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Study Content Catalog */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Comprehensive Study Content for{' '}
              <span className="text-gradient">Every Education Partner</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Choose from our ready-to-deploy content library tailored for your specific requirements
            </p>
          </div>
          <div className={`card ${styles.catalogCard} `}>
            <div className={styles.catalogGrid}>
              <div>
                <h3 className="heading-md">Banking Exams Suite</h3>
                <p className="text-sm" style={{ color: 'var(--accent-blue-light)', marginTop: '4px' }}>IBPS, SBI, RBI, RRB &amp; More</p>
                <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>
                  Complete preparation material for all major banking recruitment exams in India. Our content is updated daily with the latest exam patterns and banking awareness topics.
                </p>
                <Link href="/content-coverage/competitive-exams" className="btn btn-primary" style={{ marginTop: '24px' }}>
                  Explore Banking Content
                </Link>
              </div>
              <div>
                <h4 className="heading-sm">Study Materials</h4>
                <ul className={styles.catalogList}>
                  <li>Quantitative Aptitude (Shortcuts)</li>
                  <li>Logical Reasoning Modules</li>
                  <li>English Language &amp; Grammar</li>
                  <li>Banking Awareness Notes</li>
                </ul>
              </div>
              <div>
                <h4 className="heading-sm">Practice &amp; Tests</h4>
                <ul className={styles.catalogList}>
                  <li>150+ Full Length Mock Tests</li>
                  <li>Daily Current Affairs Quizzes</li>
                  <li>Sectional Speed Tests</li>
                  <li>Previous Year Papers (Solved)</li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/content-coverage" className="btn btn-secondary btn-lg">View Full Catalog</Link>
          </div>
        </div>
      </section>

      {/* LMS Integration */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              LMS-Ready Question Upload &amp;{' '}
              <span className="text-gradient">Format Conversion</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Save hours of manual work. We handle the entire question uploading process for your LMS platform with expert format conversion services.
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: <ComputerIcon className={styles.featureIconSvg} />, title: 'Any LMS Platform', desc: 'Compatible with all major systems' },
              { icon: <RefreshIcon className={styles.featureIconSvg} />, title: 'Format Conversion', desc: 'Export to any required format' },
              { icon: <UsersIcon className={styles.featureIconSvg} />, title: 'Expert Team', desc: 'Dedicated upload specialists' },
              { icon: <BoltIcon className={styles.featureIconSvg} />, title: 'Quick Turnaround', desc: 'Fast, reliable delivery' },
            ].map((feature) => (
              <div key={feature.title} className={`card ${styles.featureCard} `}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className="heading-sm">{feature.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Get LMS Upload Service</Link>
          </div>
        </div>
      </section>

      {/* Custom Content */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Need Custom Content?{' '}
              <span className="text-gradient">We Create It for You</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Beyond our extensive content library, we create bespoke study materials, mock tests, and practice papers for any topic, exam, or subject tailored to your exact requirements.
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: <BookIcon className={styles.featureIconSvg} />, title: 'Custom Study Materials', desc: 'Tailored content for any subject, topic, or curriculum' },
              { icon: <CheckCircleIcon className={styles.featureIconSvg} />, title: 'Custom Mock Tests', desc: 'Bespoke assessments for any exam pattern or requirement' },
              { icon: <DocumentTextIcon className={styles.featureIconSvg} />, title: 'Custom Practice Papers', desc: 'Specialized worksheets and question sets on demand' },
            ].map((item) => (
              <div key={item.title} className={`card ${styles.featureCard} `}>
                <div className={styles.featureIcon}>{item.icon}</div>
                <h3 className="heading-sm">{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/solutions/custom-content-creation" className="btn btn-primary btn-lg">Explore Custom Content Services</Link>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className={styles.offerBanner}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>New Partner Benefit from Contenu Labs</span>
          <h2 className="heading-lg">
            Exclusive <span style={{ color: 'var(--accent-orange)' }}>10% Off</span> on Your First Content Package
          </h2>
          <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
            Sign up now and receive complimentary daily current affairs slides for 12 months as a welcome bonus.
          </p>
          <Link href="/contact" className="btn btn-orange btn-lg" style={{ marginTop: '28px' }}>Claim Your Offer</Link>
        </div>
      </section>

      {/* Why Education Partners Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Why Education Partners{' '}
              <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Your dedicated content partner delivering quality study materials at competitive prices with proven reliability
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <CheckCircleIcon className={styles.featureIconSvg} />,
                title: 'Hassle Free',
                desc: 'With us, you just sit back and get the desired study material without any hassle in no time. Our team is committed to serve you with the best products and services.',
              },
              {
                icon: <RefreshIcon className={styles.featureIconSvg} />,
                title: 'Latest Pattern',
                desc: 'We keep a close eye on the latest trends in exams and keep updating our study material accordingly from time to time with latest changes.',
              },
              {
                icon: <AcademicCapIcon className={styles.featureIconSvg} />,
                title: 'Well Researched',
                desc: 'Our content team keeps participating in different exams to understand the latest changes and with their findings, they create well-researched content.',
              },
            ].map((item) => (
              <div key={item.title} className={`card ${styles.whyCard} `}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 className="heading-sm">{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '12px', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Comprehensive content solutions to power your organization
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: <BookIcon className={styles.featureIconSvg} />, title: 'Study Material', desc: 'White-label PDFs, notes, and learning content', href: '/solutions/white-label-study-material' },
              { icon: <CheckCircleIcon className={styles.featureIconSvg} />, title: 'Mock Tests', desc: 'Full-length tests with detailed solutions', href: '/solutions/mock-tests-and-assessments' },
              { icon: <DocumentTextIcon className={styles.featureIconSvg} />, title: 'Question Banks', desc: 'Topic-wise practice questions repository', href: '/solutions/question-banks' },
              { icon: <CalendarIcon className={styles.featureIconSvg} />, title: 'Daily Updates', desc: 'Current affairs & daily learning content', href: '/solutions/daily-learning-services' },
            ].map((service) => (
              <Link href={service.href} key={service.title} className={`card ${styles.serviceCard} `}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className="heading-sm">{service.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{service.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/solutions" className="btn btn-secondary btn-lg">View All Solutions</Link>
          </div>
        </div>
      </section>

      {/* Built for Education Partners - Marquee */}
      <section className={`section ${styles.partnersSection} `}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Built for{' '}
              <span className="text-gradient">Education Partners</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Trusted by coaching institutes, EdTech platforms, and publishers across India
            </p>
          </div>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[
              { icon: <ComputerIcon className={styles.marqueeIconSvg} />, title: 'EdTech Platforms', sub: 'App-based learning' },
              { icon: <BuildingIcon className={styles.marqueeIconSvg} />, title: 'Coaching Institutes', sub: 'Offline & online' },
              { icon: <BookIcon className={styles.marqueeIconSvg} />, title: 'Publishers', sub: 'Print & digital' },
              { icon: <VideoIcon className={styles.marqueeIconSvg} />, title: 'Content Creators', sub: 'Individual educators' },
              { icon: <AcademicCapIcon className={styles.marqueeIconSvg} />, title: 'Training Institutes', sub: 'Skill development' },
              { icon: <GlobeIcon className={styles.marqueeIconSvg} />, title: 'Online Academies', sub: 'Digital learning' },
              { icon: <DocumentTextIcon className={styles.marqueeIconSvg} />, title: 'Test Prep Centers', sub: 'Exam coaching' },
              { icon: <ComputerIcon className={styles.marqueeIconSvg} />, title: 'E-Learning Portals', sub: 'Web platforms' },
              { icon: <ComputerIcon className={styles.marqueeIconSvg} />, title: 'EdTech Platforms', sub: 'App-based learning' },
              { icon: <BuildingIcon className={styles.marqueeIconSvg} />, title: 'Coaching Institutes', sub: 'Offline & online' },
              { icon: <BookIcon className={styles.marqueeIconSvg} />, title: 'Publishers', sub: 'Print & digital' },
              { icon: <VideoIcon className={styles.marqueeIconSvg} />, title: 'Content Creators', sub: 'Individual educators' },
              { icon: <AcademicCapIcon className={styles.marqueeIconSvg} />, title: 'Training Institutes', sub: 'Skill development' },
              { icon: <GlobeIcon className={styles.marqueeIconSvg} />, title: 'Online Academies', sub: 'Digital learning' },
              { icon: <DocumentTextIcon className={styles.marqueeIconSvg} />, title: 'Test Prep Centers', sub: 'Exam coaching' },
              { icon: <ComputerIcon className={styles.marqueeIconSvg} />, title: 'E-Learning Portals', sub: 'Web platforms' },
            ].map((p, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.marqueeIcon}>{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <span className={styles.marqueeSubtext}>{p.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Please reach us at info@contenulabs.com if you cannot find an answer to your question.
            </p>
          </div>
          <div className={styles.faqList}>
            {[
              { q: 'What types of content does Contenu Labs provide?', a: 'We provide comprehensive white-label study materials, mock tests, question banks, daily current affairs, and practice papers for competitive exams (Banking, SSC, Railways), academics (CBSE, ICSE), and entrance exams (JEE, NEET).' },
              { q: 'Can I use this content under my own brand?', a: 'Yes! All content comes with full white-label rights. You can publish and distribute it under your brand name with complete ownership and no recurring royalties.' },
              { q: 'How is the content delivered?', a: 'Content is delivered in multiple formats including PDF, Word documents, and LMS-compatible formats. We also offer direct LMS upload services for seamless integration.' },
              { q: 'Do you provide daily content updates?', a: 'Yes, our Daily Learning Services include daily current affairs PDFs, practice assignments, news bulletins, and short-form video content — all white-labeled for your brand.' },
              { q: 'What if I need custom content?', a: 'We offer custom content creation services. Our expert team can create bespoke study materials, mock tests, and practice papers tailored to your specific requirements.' },
              { q: 'How can I get started?', a: 'Simply contact us through our Contact page or email us at info@contenulabs.com. We\'ll schedule a consultation to understand your needs and provide a personalized solution.' },
            ].map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/contact" className="btn btn-secondary">Read All FAQs</Link>
          </div>
        </div>
      </section>

      {/* Launch CTA */}
      <section className={styles.launchCta}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 className="heading-xl">
            Launch Your Content Library with{' '}
            <span className="text-gradient">Contenu Labs</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Join hundreds of education partners already scaling with our white-label content solutions.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '32px' }}>
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

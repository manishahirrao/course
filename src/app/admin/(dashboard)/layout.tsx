'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: '📊' },
  { name: 'Products', path: '/admin/products', icon: '📦' },
  { name: 'Content', path: '/admin/content', icon: '📄' },
  { name: 'Users', path: '/admin/users', icon: '👥' },
  { name: 'Messages', path: '/admin/messages', icon: '✉️' },
  { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      {/* Sidebar Navigation */}
      <aside style={{ 
        width: '260px', 
        background: '#ffffff', 
        borderRight: '1px solid var(--border-color)', 
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Brand Area */}
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '160px', height: '40px' }}>
             <Image src="/assets/continue-labs-logo.png" alt="Contenu Labs Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
          </div>
        </div>

        {/* Dynamic Nav Menu */}
        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', paddingLeft: '8px' }}>
            Menu
          </p>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '12px 16px', 
                  borderRadius: 'var(--radius-md)', 
                  background: isActive ? 'var(--accent-blue)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s var(--ease-out)',
                }}
              >
                <span style={{ fontSize: '1.25rem', opacity: isActive ? 1 : 0.7 }}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div style={{ padding: '24px', borderTop: '1px solid var(--border-color)' }}>
          <Link href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--accent-red)', 
            fontWeight: 500,
            padding: '8px',
            borderRadius: '8px',
            transition: 'background 0.2s',
          }}>
            <span>&larr;</span> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* Top Header */}
        <header style={{ 
          height: '72px', 
          background: '#ffffff', 
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '320px' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search anything..." 
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                outline: 'none',
                background: 'var(--bg-secondary)',
                fontSize: '0.875rem',
                transition: 'border-color 0.2s'
              }} 
            />
          </div>

          {/* Right Header Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'relative' }}>
              <span style={{ fontSize: '1.25rem' }}>🔔</span>
              <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>Admin User</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Super Admin</p>
              </div>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'var(--gradient-blue)', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 'bold',
                boxShadow: 'var(--shadow-sm)'
              }}>
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Scrollable Area */}
        <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}

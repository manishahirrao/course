export default function AdminDashboardPage() {
    return (
        <div className="animate-fade-in-up">
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="heading-lg">Dashboard Overview</h1>
                    <p className="text-md" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Here&apos;s what&apos;s happening with your platform today.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn btn-secondary" style={{ padding: '10px 20px' }}>Download Report</button>
                    <button className="btn btn-primary" style={{ padding: '10px 20px' }}>+ New Product</button>
                </div>
            </div>

            {/* Advanced Stats Row */}
            <div className="grid-4" style={{ gap: '24px', marginBottom: '32px' }}>
                {[
                    { title: 'Total Revenue', value: '₹14.2L', trend: '+12.5%', isUp: true, icon: '💰' },
                    { title: 'Active Partners', value: '520', trend: '+4.2%', isUp: true, icon: '🏛️' },
                    { title: 'Content Downloads', value: '12.4k', trend: '-1.1%', isUp: false, icon: '📥' },
                    { title: 'Pending Messages', value: '18', trend: 'Needs action', isUp: null, icon: '✉️' },
                ].map((stat, i) => (
                    <div key={i} className="card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className="text-sm" style={{ color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.title}</h3>
                                <p className="heading-lg" style={{ marginTop: '8px', color: 'var(--text-primary)' }}>{stat.value}</p>
                            </div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                                {stat.icon}
                            </div>
                        </div>
                        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {stat.isUp !== null && (
                                <span style={{ 
                                    color: stat.isUp ? 'var(--accent-green)' : 'var(--accent-red)', 
                                    fontSize: '0.875rem', 
                                    fontWeight: 600,
                                    background: stat.isUp ? '#d1fae5' : '#fee2e2',
                                    padding: '2px 8px',
                                    borderRadius: '12px'
                                }}>
                                    {stat.isUp ? '↑' : '↓'} {stat.trend}
                                </span>
                            )}
                            {stat.isUp === null && (
                                <span className="badge badge-orange">{stat.trend}</span>
                            )}
                            {stat.isUp !== null && <span className="text-sm" style={{ color: 'var(--text-muted)' }}>vs last month</span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid-3" style={{ gap: '24px' }}>
                {/* Main Table Area */}
                <div className="card" style={{ gridColumn: 'span 2', padding: '0', overflow: 'hidden' }}>
                    <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 className="heading-sm">Recent Partner Activity</h2>
                        <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer' }}>View All</button>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ background: 'var(--bg-secondary)' }}>
                            <tr>
                                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Partner Name</th>
                                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Purchased Product</th>
                                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Date</th>
                                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Vikas IAS Academy', product: 'Banking Study Material', date: 'Oct 24, 2023', status: 'Completed', color: 'green' },
                                { name: 'Pathfinder Institute', product: 'SSC Mock Tests Bundle', date: 'Oct 23, 2023', status: 'Processing', color: 'orange' },
                                { name: 'Agastaya Classes', product: 'Custom Video Editing', date: 'Oct 22, 2023', status: 'In Review', color: 'blue' },
                                { name: 'Paramount Coaching', product: 'Weekly Current Affairs', date: 'Oct 21, 2023', status: 'Completed', color: 'green' },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }}>
                                    <td style={{ padding: '16px 24px', fontWeight: 500 }}>{row.name}</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>{row.product}</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>{row.date}</td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <span className={`badge badge-${row.color}`}>{row.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Right Column / Quick Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="card" style={{ padding: '24px' }}>
                        <h2 className="heading-sm" style={{ marginBottom: '16px' }}>Quick Actions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', width: '100%', borderColor: 'transparent', background: 'var(--bg-secondary)', fontWeight: 500 }}>
                                <span style={{ marginRight: '8px' }}>✍️</span> Write New Blog Post
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', width: '100%', borderColor: 'transparent', background: 'var(--bg-secondary)', fontWeight: 500 }}>
                                <span style={{ marginRight: '8px' }}>📢</span> Update Daily News
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', width: '100%', borderColor: 'transparent', background: 'var(--bg-secondary)', fontWeight: 500 }}>
                                <span style={{ marginRight: '8px' }}>🎨</span> Manage Assets
                            </button>
                        </div>
                    </div>
                    
                    <div className="card" style={{ padding: '24px', background: 'var(--gradient-blue)', color: 'white', border: 'none' }}>
                        <h2 className="heading-sm" style={{ color: 'white', marginBottom: '8px' }}>Need Help?</h2>
                        <p className="text-sm" style={{ opacity: 0.9, marginBottom: '16px', lineHeight: 1.5 }}>
                            Check the documentation to understand how to manage products and process orders effectively.
                        </p>
                        <button style={{ background: 'white', color: 'var(--accent-blue)', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                            View Guide
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

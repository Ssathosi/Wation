import './BottomNav.css';
import { NavLink } from 'react-router-dom';
import { Home, Search, MessageSquare, Settings } from 'lucide-react';

export default function BottomNav() {
    const navItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/search', icon: Search, label: 'Search' },
        { to: '/inbox', icon: MessageSquare, label: 'Inbox', badge: 3 },
        { to: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <nav className="bottom-nav">
            <div className="bottom-nav-inner">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon-wrapper">
                            <item.icon size={22} strokeWidth={2} />
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                        </div>
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

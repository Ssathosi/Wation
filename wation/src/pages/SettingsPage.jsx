import './SettingsPage.css';
import { useNavigate } from 'react-router-dom';
import {
    ChevronLeft, ChevronRight, Moon, Bell, Globe, Building2,
    UserPlus, CreditCard, Shield, HelpCircle, Info, LogOut
} from 'lucide-react';
import { currentUser } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export default function SettingsPage() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const settingsSections = [
        {
            title: 'PREFERENCES',
            items: [
                {
                    icon: Moon,
                    label: 'Appearance',
                    value: 'Dark Mode',
                    toggle: true,
                    toggled: theme === 'dark',
                    onToggle: toggleTheme,
                },
                { icon: Bell, label: 'Notifications', hasArrow: true },
                { icon: Globe, label: 'Language', value: 'English', hasArrow: true },
            ],
        },
        {
            title: 'WORKSPACE',
            items: [
                { icon: Building2, label: 'Manage Workspaces', hasArrow: true },
                { icon: UserPlus, label: 'Invite Members', hasArrow: true },
                { icon: CreditCard, label: 'Billing', badge: 'Pro Plan', hasArrow: true },
            ],
        },
        {
            title: 'ACCOUNT',
            items: [
                { icon: Shield, label: 'Privacy & Security', hasArrow: true },
                { icon: HelpCircle, label: 'Help & Support', hasArrow: true },
                { icon: Info, label: 'About Wation', value: 'Version 1.2.4', hasArrow: true },
            ],
        },
    ];

    return (
        <div className="settings-page">
            {/* Header */}
            <header className="settings-header">
                <button className="settings-back-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <h1 className="settings-title">Settings</h1>
                <div style={{ width: 36 }}></div>
            </header>

            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-avatar">
                    <img src={currentUser.avatar} alt={currentUser.name} />
                </div>
                <div className="profile-info">
                    <h2 className="profile-name">{currentUser.name}</h2>
                    <p className="profile-email">{currentUser.email}</p>
                    <button className="edit-profile-btn">Edit Profile</button>
                </div>
            </div>

            {/* Settings Sections */}
            <div className="settings-sections">
                {settingsSections.map((section) => (
                    <div key={section.title} className="settings-section">
                        <h3 className="section-title">{section.title}</h3>
                        <div className="section-items">
                            {section.items.map((item) => (
                                <button key={item.label} className="settings-item">
                                    <div className="item-left">
                                        <div className="item-icon">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="item-label">{item.label}</span>
                                    </div>
                                    <div className="item-right">
                                        {item.badge && (
                                            <span className="item-badge">{item.badge}</span>
                                        )}
                                        {item.value && !item.toggle && (
                                            <span className="item-value">{item.value}</span>
                                        )}
                                        {item.toggle && (
                                            <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
                                                <input
                                                    type="checkbox"
                                                    checked={item.toggled}
                                                    onChange={item.onToggle}
                                                />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        )}
                                        {item.hasArrow && (
                                            <ChevronRight size={18} className="item-arrow" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sign Out Button */}
            <button className="sign-out-btn">
                <LogOut size={18} />
                <span>Sign Out</span>
            </button>
        </div>
    );
}

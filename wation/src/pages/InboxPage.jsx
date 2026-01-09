import './InboxPage.css';
import { useState } from 'react';
import { CheckCheck, Edit3 } from 'lucide-react';
import { notifications } from '../data/mockData';

export default function InboxPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'mentions', label: 'Mentions' },
        { id: 'assigned', label: 'Assigned to me' },
        { id: 'replies', label: 'Replies' },
    ];

    // Group notifications by date
    const todayNotifications = notifications.filter(n =>
        ['2m', '15m', '1h', '2h'].includes(n.time)
    );
    const yesterdayNotifications = notifications.filter(n =>
        n.time === '1d'
    );

    return (
        <div className="inbox-page">
            {/* Header */}
            <header className="inbox-header">
                <h1 className="inbox-title">Inbox</h1>
                <button className="mark-all-btn">
                    <CheckCheck size={20} />
                </button>
            </header>

            {/* Filter Tabs */}
            <div className="inbox-filters">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Notifications List */}
            <div className="notifications-list">
                {/* Today */}
                {todayNotifications.length > 0 && (
                    <div className="notification-group">
                        <h2 className="group-label">TODAY</h2>
                        {todayNotifications.map((notif) => (
                            <div key={notif.id} className={`notification-card ${notif.unread ? 'unread' : ''}`}>
                                <div className="notification-avatar">
                                    <img src={notif.user.avatar} alt={notif.user.name} />
                                </div>
                                <div className="notification-content">
                                    <div className="notification-header">
                                        <p className="notification-text">
                                            <span className="user-name">{notif.user.name}</span>
                                            {' '}{notif.action}{' '}
                                            <span className="target-link">{notif.target}</span>
                                        </p>
                                        <span className="notification-time">{notif.time}</span>
                                    </div>
                                    <div className="notification-preview">
                                        <span className="quote-icon">"</span>
                                        <p>{notif.preview}</p>
                                    </div>
                                </div>
                                {notif.unread && <span className="unread-dot"></span>}
                            </div>
                        ))}
                    </div>
                )}

                {/* Yesterday */}
                {yesterdayNotifications.length > 0 && (
                    <div className="notification-group">
                        <h2 className="group-label">YESTERDAY</h2>
                        {yesterdayNotifications.map((notif) => (
                            <div key={notif.id} className={`notification-card ${notif.unread ? 'unread' : ''}`}>
                                <div className="notification-avatar">
                                    <img src={notif.user.avatar} alt={notif.user.name} />
                                </div>
                                <div className="notification-content">
                                    <div className="notification-header">
                                        <p className="notification-text">
                                            <span className="user-name">{notif.user.name}</span>
                                            {' '}{notif.action}{' '}
                                            <span className="target-link">{notif.target}</span>
                                        </p>
                                        <span className="notification-time">{notif.time}</span>
                                    </div>
                                    <div className="notification-preview">
                                        <span className="quote-icon">"</span>
                                        <p>{notif.preview}</p>
                                    </div>
                                </div>
                                {notif.unread && <span className="unread-dot"></span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* FAB */}
            <button className="fab">
                <Edit3 size={22} />
            </button>
        </div>
    );
}

import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, FileText, CheckSquare, Clock, Pin } from 'lucide-react';
import { currentUser, recentItems, favorites, todaysTasks } from '../data/mockData';

export default function HomePage() {
    const navigate = useNavigate();

    // Get greeting based on time
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="home-page">
            {/* Header Section */}
            <header className="home-header">
                <div className="user-greeting">
                    <div className="avatar avatar-lg">
                        <img src={currentUser.avatar} alt={currentUser.name} />
                    </div>
                    <div className="greeting-text">
                        <span className="greeting-label">{getGreeting()},</span>
                        <h1 className="greeting-name">{currentUser.name.split(' ')[0]}</h1>
                    </div>
                </div>
                <button className="header-search-btn" onClick={() => navigate('/search')}>
                    <Search size={20} />
                </button>
            </header>

            {/* Quick Actions */}
            <section className="quick-actions">
                <h2 className="section-label">Quick Actions</h2>
                <div className="quick-actions-grid">
                    <button className="quick-action-card ai-card" onClick={() => navigate('/ai')}>
                        <div className="quick-action-icon">
                            <Sparkles size={22} />
                        </div>
                        <span className="quick-action-title">Ask AI</span>
                        <span className="quick-action-subtitle">Assistant</span>
                    </button>
                    <button className="quick-action-card" onClick={() => navigate('/notes/new')}>
                        <div className="quick-action-icon">
                            <FileText size={22} />
                        </div>
                        <span className="quick-action-title">New Note</span>
                        <span className="quick-action-subtitle">Create</span>
                    </button>
                    <button className="quick-action-card" onClick={() => navigate('/tasks')}>
                        <div className="quick-action-icon">
                            <CheckSquare size={22} />
                        </div>
                        <span className="quick-action-title">New Task</span>
                        <span className="quick-action-subtitle">To-do</span>
                    </button>
                </div>
            </section>

            {/* Recently Accessed */}
            <section className="recently-accessed">
                <div className="section-header">
                    <h2 className="section-label">Recently Accessed</h2>
                    <button className="section-link">View all</button>
                </div>
                <div className="recent-cards">
                    {recentItems.map((item) => (
                        <button
                            key={item.id}
                            className="recent-card"
                            onClick={() => navigate('/notes/1')}
                        >
                            <div className="recent-card-thumb" style={{ background: item.color }}>
                                <span className="recent-card-category">{item.category}</span>
                            </div>
                            <h3 className="recent-card-title">{item.title}</h3>
                            <div className="recent-card-meta">
                                <Clock size={12} />
                                <span>{item.updatedAt}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Favorites */}
            <section className="favorites">
                <h2 className="section-label">Favorites</h2>
                <div className="favorites-list">
                    {favorites.map((item) => (
                        <button
                            key={item.id}
                            className="favorite-item"
                            onClick={() => navigate('/notes/1')}
                        >
                            <div className="favorite-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                <span>{item.icon}</span>
                            </div>
                            <div className="favorite-content">
                                <h3 className="favorite-title">{item.title}</h3>
                                <p className="favorite-subtitle">{item.subtitle}</p>
                            </div>
                            <Pin size={16} className="favorite-pin" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Today's Tasks */}
            <section className="todays-tasks">
                <div className="section-header">
                    <h2 className="section-label">Today's Tasks</h2>
                    <span className="task-count">{todaysTasks.filter(t => !t.done).length}</span>
                </div>
                <div className="tasks-list">
                    {todaysTasks.map((task) => (
                        <div key={task.id} className={`task-item ${task.done ? 'task-done' : ''}`}>
                            <label className="task-checkbox">
                                <input type="checkbox" defaultChecked={task.done} />
                                <span className="checkmark"></span>
                            </label>
                            <div className="task-content">
                                <h3 className="task-title">{task.title}</h3>
                                <span className="task-time">{task.time}</span>
                            </div>
                            <span className={`task-category category-${task.category.toLowerCase()}`}>
                                {task.category}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

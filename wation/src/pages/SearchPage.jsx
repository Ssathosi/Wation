import './SearchPage.css';
import { useState } from 'react';
import { Search, X, Clock, FileText, CheckSquare, Users, Folder, ArrowRight } from 'lucide-react';
import { favorites } from '../data/mockData';

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const recentSearches = [
        'Q4 Marketing Strategy',
        'Product roadmap',
        'Design system',
        'Team meeting notes',
    ];

    const categories = [
        { icon: FileText, label: 'Notes', count: 24 },
        { icon: CheckSquare, label: 'Tasks', count: 18 },
        { icon: Folder, label: 'Projects', count: 8 },
        { icon: Users, label: 'People', count: 12 },
    ];

    return (
        <div className="search-page">
            {/* Search Input */}
            <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
                <Search size={20} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search notes, tasks, projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    autoFocus
                />
                {searchQuery && (
                    <button className="clear-btn" onClick={() => setSearchQuery('')}>
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Quick Categories */}
            <div className="quick-categories">
                {categories.map((cat) => (
                    <button key={cat.label} className="category-card">
                        <div className="category-icon">
                            <cat.icon size={20} />
                        </div>
                        <span className="category-label">{cat.label}</span>
                        <span className="category-count">{cat.count}</span>
                    </button>
                ))}
            </div>

            {/* Recent Searches */}
            <section className="search-section">
                <div className="section-header">
                    <h2 className="section-heading">Recent Searches</h2>
                    <button className="clear-all-btn">Clear all</button>
                </div>
                <div className="recent-searches">
                    {recentSearches.map((search, i) => (
                        <button key={i} className="recent-search-item">
                            <Clock size={16} className="search-item-icon" />
                            <span>{search}</span>
                            <ArrowRight size={16} className="arrow-icon" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Quick Access */}
            <section className="search-section">
                <h2 className="section-heading">Quick Access</h2>
                <div className="quick-access-list">
                    {favorites.slice(0, 3).map((item) => (
                        <button key={item.id} className="quick-access-item">
                            <div className="access-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                <span>{item.icon}</span>
                            </div>
                            <div className="access-content">
                                <span className="access-title">{item.title}</span>
                                <span className="access-subtitle">{item.subtitle}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Browse All */}
            <section className="search-section">
                <h2 className="section-heading">Browse All</h2>
                <div className="browse-grid">
                    <button className="browse-card">
                        <FileText size={24} />
                        <span>All Notes</span>
                    </button>
                    <button className="browse-card">
                        <CheckSquare size={24} />
                        <span>All Tasks</span>
                    </button>
                    <button className="browse-card">
                        <Folder size={24} />
                        <span>Projects</span>
                    </button>
                    <button className="browse-card">
                        <Users size={24} />
                        <span>Shared</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

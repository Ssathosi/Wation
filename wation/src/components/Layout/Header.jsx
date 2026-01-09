import './Header.css';
import { ChevronLeft, MoreHorizontal, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({
    title,
    showBack = false,
    showSearch = false,
    showMore = true,
    rightContent,
    transparent = false,
}) {
    const navigate = useNavigate();

    return (
        <header className={`header ${transparent ? 'header-transparent' : ''}`}>
            <div className="header-left">
                {showBack ? (
                    <button className="header-btn" onClick={() => navigate(-1)}>
                        <ChevronLeft size={24} />
                    </button>
                ) : null}
            </div>

            {title && <h1 className="header-title">{title}</h1>}

            <div className="header-right">
                {rightContent}
                {showSearch && (
                    <button className="header-btn" onClick={() => navigate('/search')}>
                        <Search size={20} />
                    </button>
                )}
                {showMore && (
                    <button className="header-btn">
                        <MoreHorizontal size={20} />
                    </button>
                )}
            </div>
        </header>
    );
}

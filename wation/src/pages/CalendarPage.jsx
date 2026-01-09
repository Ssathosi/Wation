import './CalendarPage.css';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Video, MapPin } from 'lucide-react';
import { calendarEvents } from '../data/mockData';

export default function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState(24);
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = ['All', 'Meetings', 'Tasks', 'Personal'];

    // Generate calendar days
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentMonth = 'October 2024';

    // Mock calendar data with events on certain days
    const daysWithEvents = [2, 9, 10, 18, 23, 24, 30];

    // Generate days grid (October 2024 starts on Tuesday)
    const generateCalendarDays = () => {
        const days = [];
        // Empty cells for days before October 1st (Tuesday = 2)
        for (let i = 0; i < 2; i++) {
            days.push({ day: null, hasEvent: false });
        }
        // Days 1-31
        for (let i = 1; i <= 31; i++) {
            days.push({
                day: i,
                hasEvent: daysWithEvents.includes(i),
                eventColors: i === 2 ? ['#3B82F6'] :
                    i === 9 ? ['#F97316', '#8B5CF6'] :
                        i === 10 ? ['#10B981'] :
                            i === 18 ? ['#3B82F6', '#F97316'] :
                                i === 23 ? ['#8B5CF6'] :
                                    i === 24 ? ['#3B82F6', '#8B5CF6', '#F97316', '#10B981'] :
                                        i === 30 ? ['#3B82F6'] : []
            });
        }
        return days;
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="calendar-page">
            {/* Header */}
            <header className="calendar-header">
                <button className="calendar-nav-btn">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="calendar-title">Calendar</h1>
                <div className="calendar-header-right">
                    <button className="today-btn">Today</button>
                    <button className="calendar-nav-btn">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </header>

            {/* Month Selector */}
            <div className="month-selector">
                <button className="month-nav-btn">
                    <ChevronLeft size={18} />
                </button>
                <span className="current-month">{currentMonth}</span>
                <button className="month-nav-btn">
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="calendar-grid">
                {/* Day Headers */}
                <div className="calendar-week-header">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="week-day">{day}</div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="calendar-days">
                    {calendarDays.map((dayData, index) => (
                        <button
                            key={index}
                            className={`calendar-day ${dayData.day === selectedDate ? 'selected' : ''} ${!dayData.day ? 'empty' : ''}`}
                            onClick={() => dayData.day && setSelectedDate(dayData.day)}
                            disabled={!dayData.day}
                        >
                            {dayData.day && (
                                <>
                                    <span className="day-number">{dayData.day}</span>
                                    {dayData.hasEvent && (
                                        <div className="event-dots">
                                            {dayData.eventColors.slice(0, 3).map((color, i) => (
                                                <span key={i} className="event-dot" style={{ backgroundColor: color }}></span>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Today's Schedule */}
            <div className="schedule-section">
                <h2 className="schedule-title">Today's Schedule</h2>

                <div className="schedule-list">
                    {calendarEvents.map((event) => (
                        <div key={event.id} className="schedule-item">
                            <div className="schedule-time">{event.time}</div>
                            <div className="schedule-card" style={{ borderLeftColor: event.color }}>
                                <div className="schedule-card-header">
                                    <h3 className="schedule-event-title">
                                        {event.title}
                                        {event.type === 'meeting' && <Video size={14} className="event-icon" />}
                                    </h3>
                                </div>
                                <div className="schedule-card-details">
                                    <span className="detail-text">{event.duration}</span>
                                    <span className="detail-separator">•</span>
                                    <span className="detail-text">
                                        <MapPin size={12} />
                                        {event.location}
                                    </span>
                                </div>
                                <div className="schedule-avatars">
                                    <div className="avatar avatar-sm">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="" />
                                    </div>
                                    <div className="avatar avatar-sm">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=David" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filter Pills */}
            <div className="calendar-filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`filter-pill ${activeFilter === filter.toLowerCase() ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.toLowerCase())}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* FAB */}
            <button className="fab">
                <Plus size={24} />
            </button>
        </div>
    );
}

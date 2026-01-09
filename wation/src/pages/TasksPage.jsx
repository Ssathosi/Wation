import './TasksPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Filter, Plus, Calendar, Table2, LayoutGrid, Clock } from 'lucide-react';
import { projects, databaseItems } from '../data/mockData';

export default function TasksPage() {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('kanban');
    const project = projects[0];

    const columns = [
        { id: 'todo', title: 'TO DO', color: '#6B7280', tasks: project.tasks.todo },
        { id: 'inProgress', title: 'IN PROGRESS', color: '#3B82F6', tasks: project.tasks.inProgress },
        { id: 'review', title: 'REVIEW', color: '#F97316', tasks: project.tasks.review },
        { id: 'done', title: 'DONE', color: '#10B981', tasks: project.tasks.done },
    ];

    return (
        <div className="tasks-page">
            {/* Header */}
            <header className="tasks-header">
                <button className="tasks-header-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <div className="tasks-header-center">
                    <h1 className="tasks-title">{project.name}</h1>
                    <span className="tasks-status">
                        <span className="status-dot"></span>
                        {project.status}
                    </span>
                </div>
                <button className="tasks-header-btn">
                    <MoreHorizontal size={20} />
                </button>
            </header>

            {/* View Switcher & Filters */}
            <div className="tasks-controls">
                <div className="view-switcher">
                    <button
                        className={`view-switcher-btn ${activeView === 'kanban' ? 'active' : ''}`}
                        onClick={() => setActiveView('kanban')}
                    >
                        <LayoutGrid size={16} />
                        Board
                    </button>
                    <button
                        className={`view-switcher-btn ${activeView === 'table' ? 'active' : ''}`}
                        onClick={() => setActiveView('table')}
                    >
                        <Table2 size={16} />
                        Table
                    </button>
                    <button
                        className={`view-switcher-btn ${activeView === 'calendar' ? 'active' : ''}`}
                        onClick={() => setActiveView('calendar')}
                    >
                        <Calendar size={16} />
                        Calendar
                    </button>
                </div>

                <div className="tasks-filters">
                    <button className="filter-btn">
                        <Filter size={16} />
                        Filter
                    </button>
                    <div className="member-avatars">
                        {project.members.map((member) => (
                            <div
                                key={member.id}
                                className="member-avatar"
                                style={{ backgroundColor: member.color }}
                            >
                                {member.name}
                            </div>
                        ))}
                        <button className="add-member-btn">
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Kanban View */}
            {activeView === 'kanban' && (
                <div className="kanban-board">
                    {columns.map((column) => (
                        <div key={column.id} className="kanban-column">
                            <div className="column-header">
                                <div className="column-title">
                                    <span className="column-dot" style={{ backgroundColor: column.color }}></span>
                                    <span>{column.title}</span>
                                    <span className="column-count">{column.tasks.length}</span>
                                </div>
                                <button className="column-add-btn">
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="column-tasks">
                                {column.tasks.map((task) => (
                                    <div key={task.id} className="task-card" onClick={() => navigate('/notes/1')}>
                                        <span
                                            className="task-category-badge"
                                            style={{ backgroundColor: `${task.color}20`, color: task.color }}
                                        >
                                            {task.category}
                                        </span>
                                        <h3 className="task-card-title">{task.title}</h3>
                                        {task.hasImage && (
                                            <div className="task-card-image">
                                                <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="200" height="100" fill="#F3F4F6" />
                                                    <rect x="10" y="10" width="80" height="80" rx="4" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                                                    <rect x="110" y="10" width="80" height="35" rx="4" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                                                    <rect x="110" y="55" width="80" height="35" rx="4" stroke="#D1D5DB" strokeWidth="2" fill="none" />
                                                    <line x1="10" y1="30" x2="90" y2="30" stroke="#D1D5DB" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="task-card-footer">
                                            <div className="task-due-date">
                                                <Clock size={12} />
                                                <span>{task.dueDate}</span>
                                            </div>
                                            <div className="task-card-avatar">
                                                {project.members[0]?.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="add-task-btn">
                                    <Plus size={16} />
                                    <span>Add task</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Table View */}
            {activeView === 'table' && (
                <div className="table-view">
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th className="col-checkbox">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="col-name">Task Name</th>
                                    <th className="col-status">Status</th>
                                    <th className="col-priority">Priority</th>
                                    <th className="col-assignee">Assignee</th>
                                    <th className="col-date">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {databaseItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="col-checkbox">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="col-name">{item.name}</td>
                                        <td className="col-status">
                                            <span className={`status-pill status-${item.status.toLowerCase().replace(' ', '-')}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="col-priority">
                                            <span className={`priority-indicator priority-${item.priority}`}>
                                                {item.priority === 'high' && '!'}
                                                {item.priority === 'medium' && '△'}
                                                {item.priority === 'low' && '↓'}
                                            </span>
                                            <span className="priority-label">{item.priority}</span>
                                        </td>
                                        <td className="col-assignee">
                                            <div className="assignee-info">
                                                <div className="avatar avatar-sm">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.assignee}`} alt={item.assignee} />
                                                </div>
                                                <span>{item.assignee}</span>
                                            </div>
                                        </td>
                                        <td className="col-date">
                                            <Calendar size={14} />
                                            <span>{item.dueDate}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* FAB */}
            <button className="fab">
                <Plus size={24} />
            </button>
        </div>
    );
}

import './AIAssistantPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Mic, Send, FileText, Languages, FileStack } from 'lucide-react';
import { aiMessages } from '../data/mockData';

export default function AIAssistantPage() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const quickActions = [
        { icon: FileText, label: 'Draft Email' },
        { icon: Languages, label: 'Translate' },
        { icon: FileStack, label: 'Summarize Page' },
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return '#EF4444';
            case 'Medium': return '#F59E0B';
            case 'Low': return '#10B981';
            default: return '#6B7280';
        }
    };

    return (
        <div className="ai-assistant-page">
            {/* Header */}
            <header className="ai-header">
                <div className="ai-brand">
                    <div className="ai-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="ai-title">Wation</span>
                    <span className="ai-subtitle">AI Assistant</span>
                </div>
                <button className="ai-close-btn" onClick={() => navigate(-1)}>
                    <X size={20} />
                </button>
            </header>

            {/* Chat Area */}
            <div className="ai-chat">
                {/* Timestamp */}
                <div className="chat-timestamp">TODAY, 10:23 AM</div>

                {/* Messages */}
                {aiMessages.map((message) => (
                    <div key={message.id} className={`chat-message ${message.type}`}>
                        {message.type === 'assistant' && (
                            <div className="assistant-avatar">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="9" cy="9" r="1" fill="currentColor" />
                                    <circle cx="15" cy="9" r="1" fill="currentColor" />
                                </svg>
                            </div>
                        )}
                        <div className="message-bubble">
                            {message.type === 'user' ? (
                                <p>{message.content}</p>
                            ) : (
                                <div className="assistant-content">
                                    <p className="content-intro">{message.content.intro}</p>
                                    {message.content.sections.map((section, idx) => (
                                        <div key={idx} className="content-section">
                                            <h4 className="section-heading">{section.title}:</h4>
                                            <ul className="section-list">
                                                {section.items.map((item, i) => (
                                                    <li key={i}>
                                                        {typeof item === 'string' ? (
                                                            item
                                                        ) : (
                                                            <span className="list-item-with-priority">
                                                                {item.text}
                                                                <span
                                                                    className="priority-badge"
                                                                    style={{ backgroundColor: `${getPriorityColor(item.priority)}20`, color: getPriorityColor(item.priority) }}
                                                                >
                                                                    {item.priority}
                                                                </span>
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="ai-quick-actions">
                {quickActions.map((action) => (
                    <button key={action.label} className="quick-action-pill">
                        <action.icon size={14} />
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>

            {/* Input Area */}
            <div className="ai-input-area">
                <button className="input-add-btn">
                    <Plus size={20} />
                </button>
                <div className="input-field-wrapper">
                    <input
                        type="text"
                        placeholder="Ask anything..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="input-mic-btn">
                        <Mic size={18} />
                    </button>
                </div>
                <button className="input-send-btn">
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
}

import './NoteEditorPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreHorizontal, Bold, Italic, Underline, List, CheckSquare, Image, Smile, AtSign, Send } from 'lucide-react';
import { noteContent } from '../data/mockData';

export default function NoteEditorPage() {
    const navigate = useNavigate();
    const [note] = useState(noteContent);

    return (
        <div className="note-editor-page">
            {/* Header */}
            <header className="note-header">
                <button className="note-header-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <div className="note-header-center">
                    <span className="note-title-preview">{note.title}</span>
                    <div className="note-collaborators">
                        {note.collaborators.map((user, i) => (
                            <div key={i} className="avatar avatar-sm">
                                <img src={user.avatar} alt={user.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="note-header-btn">
                    <MoreHorizontal size={20} />
                </button>
            </header>

            {/* Content */}
            <div className="note-content">
                {/* Blocks */}
                {note.blocks.map((block) => (
                    <div key={block.id} className="note-block">
                        {block.type === 'heading' && (
                            <h2 className="block-heading">{block.content}</h2>
                        )}

                        {block.type === 'paragraph' && (
                            <p className="block-paragraph">
                                {block.content}
                                {block.highlight && (
                                    <>
                                        {' '}
                                        <span className="text-highlight">{block.highlight}</span>
                                        {' '}
                                        {block.highlightEnd}
                                    </>
                                )}
                            </p>
                        )}

                        {block.type === 'checklist' && (
                            <div className="block-checklist">
                                {block.items.map((item, i) => (
                                    <label key={i} className="checklist-item">
                                        <input type="checkbox" defaultChecked={item.checked} />
                                        <span className="checkmark"></span>
                                        <span className={`checklist-text ${item.checked ? 'checked' : ''}`}>
                                            {item.text}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}

                        {/* Comment attached to block */}
                        {note.comments.find(c => c.position === block.id) && (
                            <div className="block-comment-card">
                                {(() => {
                                    const comment = note.comments.find(c => c.position === block.id);
                                    return (
                                        <>
                                            <div className="comment-header">
                                                <span className={`comment-status status-${comment.status.toLowerCase()}`}>
                                                    {comment.status}
                                                </span>
                                                <span className="comment-count">{comment.count} comments</span>
                                                <button className="comment-resolve-btn">
                                                    <span>✓</span> Resolve
                                                </button>
                                            </div>
                                            <div className="comment-threads">
                                                {comment.threads.map((thread, i) => (
                                                    <div key={i} className="comment-thread">
                                                        <div className="avatar avatar-sm">
                                                            <img src={thread.avatar} alt={thread.user} />
                                                        </div>
                                                        <div className="thread-content">
                                                            <div className="thread-header">
                                                                <span className="thread-user">{thread.user}</span>
                                                                <span className="thread-time">{thread.time}</span>
                                                            </div>
                                                            <p className="thread-text">{thread.text}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="comment-reply">
                                                <input type="text" placeholder="Write a reply..." />
                                                <button className="reply-mention-btn">
                                                    <AtSign size={16} />
                                                </button>
                                                <button className="reply-send-btn">
                                                    <Send size={16} />
                                                </button>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                ))}

                {/* Slash command hint */}
                <div className="slash-hint">
                    <Smile size={14} />
                    <span>Type '/' for commands</span>
                </div>
            </div>

            {/* Bottom Toolbar */}
            <div className="note-toolbar">
                <button className="toolbar-btn"><Bold size={18} /></button>
                <button className="toolbar-btn"><Italic size={18} /></button>
                <button className="toolbar-btn"><Underline size={18} /></button>
                <div className="toolbar-divider"></div>
                <button className="toolbar-btn"><CheckSquare size={18} /></button>
                <button className="toolbar-btn"><List size={18} /></button>
                <button className="toolbar-btn"><Image size={18} /></button>
                <button className="toolbar-btn toolbar-btn-accent">
                    <Smile size={18} />
                </button>
            </div>
        </div>
    );
}

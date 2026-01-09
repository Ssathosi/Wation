// Mock Data for Wation App

export const currentUser = {
    id: 'user-1',
    name: 'Alex Morgan',
    email: 'alex.morgan@wation.app',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
};

export const recentItems = [
    {
        id: 'doc-1',
        title: 'Q4 Marketing Strategy',
        type: 'document',
        category: 'STRATEGY',
        color: 'linear-gradient(135deg, #4169FF 0%, #8B5CF6 100%)',
        icon: '📊',
        updatedAt: '2m ago',
    },
    {
        id: 'doc-2',
        title: 'Product Roadmap',
        type: 'document',
        category: 'PLANNING',
        color: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
        icon: '🚀',
        updatedAt: '1h ago',
    },
    {
        id: 'doc-3',
        title: 'Team Brainstorming',
        type: 'document',
        category: 'NOTES',
        color: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
        icon: '💡',
        updatedAt: 'Yesterday',
    },
];

export const favorites = [
    { id: 'fav-1', title: 'Product Roadmap', subtitle: 'Engineering • Q4', icon: '📋', color: '#4169FF' },
    { id: 'fav-2', title: 'Daily Habits', subtitle: 'Personal • Tracking', icon: '✅', color: '#10B981' },
    { id: 'fav-3', title: 'Second Brain', subtitle: 'Knowledge Base', icon: '🧠', color: '#8B5CF6' },
    { id: 'fav-4', title: 'Reading List', subtitle: 'Books • Articles', icon: '📚', color: '#F97316' },
];

export const todaysTasks = [
    { id: 'task-1', title: 'Review project proposal', time: '10:00 AM', done: true, category: 'Work' },
    { id: 'task-2', title: 'Client meeting with Sarah', time: '2:00 PM', done: false, category: 'Meeting' },
    { id: 'task-3', title: 'Prepare presentation slides', time: 'In progress', done: false, category: 'Work' },
    { id: 'task-4', title: 'Send follow-up emails', time: '5:00 PM', done: false, category: 'Personal' },
];

export const projects = [
    {
        id: 'project-1',
        name: 'Website Redesign',
        status: 'Active Sprint',
        members: [
            { id: 'm1', name: 'JD', color: '#EC4899' },
            { id: 'm2', name: 'AL', color: '#3B82F6' },
        ],
        tasks: {
            todo: [
                { id: 't1', title: 'Draft Home Page Wireframe', category: 'DESIGN', color: '#8B5CF6', dueDate: 'Tomorrow', hasImage: true },
                { id: 't2', title: 'Competitor Analysis', category: 'RESEARCH', color: '#3B82F6', dueDate: 'Fri, Oct 24' },
                { id: 't3', title: 'Initial Stakeholder Meeting', category: 'PLANNING', color: '#6B7280', dueDate: 'Mon, Oct 28' },
            ],
            inProgress: [
                { id: 't4', title: 'Design System Audit', category: 'DESIGN', color: '#8B5CF6', dueDate: 'Oct 25' },
                { id: 't5', title: 'Content Strategy', category: 'STRATEGY', color: '#F97316', dueDate: 'Oct 26' },
            ],
            review: [
                { id: 't6', title: 'Brand Guidelines', category: 'DESIGN', color: '#8B5CF6', dueDate: 'Oct 22' },
            ],
            done: [
                { id: 't7', title: 'Project Kickoff', category: 'PLANNING', color: '#6B7280', dueDate: 'Oct 15' },
                { id: 't8', title: 'Market Research', category: 'RESEARCH', color: '#3B82F6', dueDate: 'Oct 18' },
            ],
        },
    },
];

export const databaseItems = [
    { id: 'db-1', name: 'Q3 Marketing Launch', status: 'In Progress', priority: 'high', assignee: 'Sarah Chen', dueDate: 'Oct 25, 2024' },
    { id: 'db-2', name: 'Fix Login Bug', status: 'Done', priority: 'high', assignee: 'David Kim', dueDate: 'Oct 20, 2024' },
    { id: 'db-3', name: 'Update Documentation', status: 'To Do', priority: 'low', assignee: 'Alex Morgan', dueDate: 'Nov 01, 2024' },
    { id: 'db-4', name: 'Client Interview', status: 'In Progress', priority: 'medium', assignee: 'Mike Ross', dueDate: 'Oct 28, 2024' },
    { id: 'db-5', name: 'Design System Audit', status: 'Review', priority: 'medium', assignee: 'Emily Davis', dueDate: 'Oct 30, 2024' },
    { id: 'db-6', name: 'Database Migration', status: 'To Do', priority: 'high', assignee: 'Chris Lee', dueDate: 'Nov 05, 2024' },
    { id: 'db-7', name: 'Accessibility Improvements', status: 'Done', priority: 'low', assignee: 'Sarah Chen', dueDate: 'Oct 18, 2024' },
];

export const notifications = [
    {
        id: 'notif-1',
        type: 'mention',
        user: { name: 'Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        action: 'mentioned you in',
        target: 'Project Alpha Design Review',
        preview: 'Hey, could you take a look at the new wireframes? I think we need to adjust the...',
        time: '2m',
        unread: true,
    },
    {
        id: 'notif-2',
        type: 'reply',
        user: { name: 'David Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
        action: 'replied on',
        target: 'Q4 Marketing Plan',
        preview: 'Sure thing, I\'ll get that to you by EOD.',
        time: '15m',
        unread: true,
    },
    {
        id: 'notif-3',
        type: 'comment',
        user: { name: 'Alex Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2' },
        action: 'commented on',
        target: 'Team Brainstorming Notes',
        preview: 'Great points! Let\'s also consider the user feedback.',
        time: '1h',
        unread: false,
    },
    {
        id: 'notif-4',
        type: 'invite',
        user: { name: 'Maria Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' },
        action: 'invited you to edit',
        target: 'Client Proposal Draft',
        preview: 'Please review the new section before we send it out.',
        time: '2h',
        unread: false,
    },
    {
        id: 'notif-5',
        type: 'mention',
        user: { name: 'Chris Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris' },
        action: 'mentioned you in',
        target: 'Bug Report #405',
        preview: 'Can you investigate this issue when you have a moment?',
        time: '1d',
        unread: false,
    },
];

export const calendarEvents = [
    { id: 'cal-1', title: 'Team Standup', time: '9:00 AM', duration: '15 min', location: 'Online', color: '#3B82F6', type: 'meeting' },
    { id: 'cal-2', title: 'Design Review', time: '11:00 AM', duration: '1h 30m', location: 'Room 302', color: '#8B5CF6', type: 'meeting' },
    { id: 'cal-3', title: 'Client Presentation', time: '2:00 PM', duration: '1h', location: 'Conference Hall A', color: '#F97316', type: 'meeting' },
    { id: 'cal-4', title: 'Project Planning', time: '4:00 PM', duration: '1h', location: 'Office', color: '#10B981', type: 'meeting' },
];

export const noteContent = {
    id: 'note-1',
    title: 'Q3 Marketing Strategy',
    emoji: '📈',
    coverImage: null,
    collaborators: [
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
    ],
    blocks: [
        { id: 'b1', type: 'heading', content: '1. Executive Summary' },
        { id: 'b2', type: 'paragraph', content: 'Our primary goal for Q3 is to expand our digital footprint across emerging markets. We have seen a 15% increase in organic traffic from the APAC region, suggesting a strong product-market fit.' },
        { id: 'b3', type: 'paragraph', content: 'Based on these findings, we propose a reallocation of the budget.', highlight: 'We need to double down on social media ad spend for the upcoming launch.', highlightEnd: 'This will ensure we capture the growing demand before our competitors can react.' },
        { id: 'b4', type: 'heading', content: '2. Key Metrics' },
        {
            id: 'b5', type: 'checklist', items: [
                { text: 'Finalize design prototypes for onboarding', checked: true },
                { text: 'Define user testing cohorts', checked: false },
                { text: 'Set up backend infrastructure for analytics', checked: false },
            ]
        },
    ],
    comments: [
        {
            id: 'c1',
            status: 'OPEN',
            count: 2,
            position: 'b3',
            threads: [
                { user: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', text: '@Alex, this is crucial. Can you check the budget for this? It might require reallocation from the display ad fund.', time: '20m ago' },
                { user: 'Alex (You)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', text: 'Absolutely, I\'ve already prepared a proposal for the budget shift. Will share it by EOD.', time: 'Just now' },
            ],
        },
    ],
};

export const aiMessages = [
    {
        id: 'ai-1',
        type: 'user',
        content: 'Summarize the "Q4 Marketing Strategy" page for me, please.',
    },
    {
        id: 'ai-2',
        type: 'assistant',
        content: {
            intro: 'Here is a summary of the project proposal:',
            sections: [
                { title: 'Objective', items: ['Complete launch by end of Q4.'] },
                { title: 'Stakeholders', items: ['Marketing Team (Lead: Sarah)', 'Engineering (Lead: David)', 'Product Owner'] },
                {
                    title: 'Next Steps', items: [
                        { text: 'Schedule kick-off meeting', priority: 'High' },
                        { text: 'Finalize resource allocation', priority: 'Medium' },
                        { text: 'Prepare initial timeline', priority: 'Low' },
                    ]
                },
            ],
        },
    },
];

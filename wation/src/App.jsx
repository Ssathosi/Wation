import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import BottomNav from './components/Layout/BottomNav';

// Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NoteEditorPage from './pages/NoteEditorPage';
import TasksPage from './pages/TasksPage';
import InboxPage from './pages/InboxPage';
import CalendarPage from './pages/CalendarPage';
import SettingsPage from './pages/SettingsPage';
import AIAssistantPage from './pages/AIAssistantPage';

import './index.css';

function AppContent() {
    const location = useLocation();

    // Pages that should hide the bottom nav
    const hideNavPaths = ['/notes/', '/ai', '/tasks'];
    const shouldHideNav = hideNavPaths.some(path => location.pathname.includes(path));

    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/notes/:id" element={<NoteEditorPage />} />
                <Route path="/notes/new" element={<NoteEditorPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/inbox" element={<InboxPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/ai" element={<AIAssistantPage />} />
            </Routes>
            {!shouldHideNav && <BottomNav />}
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

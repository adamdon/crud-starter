import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/about/AboutPage';

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    )
}

// Keep the named export as primary, but default can be useful for lazy loading later if needed
export default App;
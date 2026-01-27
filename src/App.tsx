
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import BlogDetailPage from './pages/BlogDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HomePage />
              <Footer />
            </>
          }
        />

        {/* Blog Details Route */}
        <Route
          path="/blog/:slug"
          element={<BlogDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;

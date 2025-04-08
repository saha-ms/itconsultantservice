import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import { getPublicUrl } from './utils/urlHelper';

function App() {
  return (
    <Routes>
      <Route path={getPublicUrl("/")} element={<Home />} />
      <Route path={getPublicUrl("/about-us")} element={<AboutUs />} />
      <Route path={getPublicUrl("/services")} element={<Services />} />
      <Route path={getPublicUrl("/contact")} element={<Contact />} />
      <Route path={getPublicUrl("/blog")} element={<Blog />} />
      <Route path={getPublicUrl("/faqs")} element={<FAQs />} />
    </Routes>
  );
}

export default App;
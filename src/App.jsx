
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogPost from './BlogPost.jsx';
import BlogHome, { SiteHeader } from './BlogHome.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader/>
    <Routes>
      <Route path = "/" element = {<BlogHome />} />
      <Route path = "/:slug" element = {<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";
import AllProjects from "./pages/AllProjects"; // NEW IMPORT
import AllBlogs from "./pages/AllBlogs"; // NEW IMPORT

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-[-1] bg-primary overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-highlight/20 blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          {/* NEW ROUTES */}
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

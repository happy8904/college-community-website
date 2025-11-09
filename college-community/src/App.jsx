import React, { Suspense, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// ✅ Auto Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ✅ Fallback Component (while lazy routes load)
const LoadingScreen = () => (
  <div style={{
    textAlign: "center",
    padding: "40px",
    fontSize: "18px",
    color: "#555",
  }}>
    Loading page...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          {/* Suspense for lazy loading */}
          <Suspense fallback={<LoadingScreen />}>
            <AppRouter />
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

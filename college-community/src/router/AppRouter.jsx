// src/router/AppRouter.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthComp from '../pages/AuthComponents.jsx'; 
import App from '../App.jsx';


import Home from '../pages/Home.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Events from '../pages/Events.jsx';



import Forum from '../components/Forum/ForumList.jsx';
import Chatbot from '../components/Chatbot/Chatbot.jsx';
import Predictor from '../components/PerformancePredictor/Predictor.jsx';
import Notes from '../components/NotesSummarizer/NotesSummarizer.jsx'; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
          
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          
          <Route path="login" element={<AuthPage />} />
          <Route path="signup" element={<AuthPage />} />
          
          <Route path="forum" element={<Forum />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="predictor" element={<Predictor />} />
          <Route path="notes" element={<Notes />} />

          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
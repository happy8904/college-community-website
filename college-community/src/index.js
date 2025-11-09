// src/router/index.js

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import App from './App';
// Import other page components you have created
import Forum from './components/Forum/ForumList'; 
import Chatbot from './components/Chatbot/Chatbot';
import Predictor from './components/PerformancePredictor/Predictor';
import Notes from './components/NotesSummarizer/NotesSummarizer'; 
// Placeholder components for other routes
const Dashboard = () => <div>Dashboard Page</div>;
const Events = () => <div>Events Page</div>;
const Login = () => <div>Login Page</div>;
const SignUp = () => <div>Sign Up Page</div>;


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />, // The attractive, new Home Page
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/forum',
        element: <Forum />,
      },
      {
        path: '/chatbot',
        element: <Chatbot />,
      },
      {
        path: '/predictor',
        element: <Predictor />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
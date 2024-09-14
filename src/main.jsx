import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/home' replace />,
    },
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'shop', element: <Shop /> },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

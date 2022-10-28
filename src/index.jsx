import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './templates/404/index';
import Home from './templates/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    ,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

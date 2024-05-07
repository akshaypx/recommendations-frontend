import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/layout';
import Details from './pages/Details';
import KnowledgeBased from './pages/KnowledgeBased';
import { MyLocationProvider } from './api/context';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: '/kb',
    element: (
      <Layout>
        <KnowledgeBased />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyLocationProvider>
    <RouterProvider router={router} />
  </MyLocationProvider>
);

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout.tsx";
import Details from "./pages/Details.tsx";
import KnowledgeBased from "./pages/KnowledgeBased.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: "/kb",
    element: (
      <Layout>
        <KnowledgeBased />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

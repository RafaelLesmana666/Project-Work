import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/Home';
import TambahUser from "./pages/TambahUser";
import Peminjaman from "./pages/Peminjaman";
import Permintaan from "./pages/Permintaan";
import DaftarBarangIn from "./pages/DaftarbarangIn";
import DaftarBarangNon from "./pages/DaftarBarangNon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Dashboard",
    element: <Home/>
  },
  {
    path: "/tambah",
    element : <TambahUser/>
  },
  {
    path: "/peminjaman",
    element : <Peminjaman/>
  },
  {
    path: "/permintaan",
    element : <Permintaan/>
  },
  {
    path: "/Inventaris",
    element : <DaftarBarangIn/>
  },
  {
    path: "/NonInventaris",
    element : <DaftarBarangNon/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
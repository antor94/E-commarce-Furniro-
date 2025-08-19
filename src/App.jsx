
import React, { useEffect, useState } from "react";
import {  createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider, useLocation,Outlet,} from "react-router-dom";
import LayoutOne from "./layout/LayoutOne";
import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import AllProduct from "./pages/AllProduct";
import SinglePage from "./pages/SinglePage";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";

//--------- Simple Preloader Component
function Preloader() {
  return (

    // -------------- loading

<div className="flex justify-center mt-[300px] items-center">

<div
  class="max-w-sm p-4 border  border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400"
>
  <div
    class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
  >
    <svg
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="w-10 h-10 text-gray-200 dark:text-gray-600"
    >
      <path
        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
      ></path>
      <path
        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
      ></path>
    </svg>
  </div>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
  <div class="flex items-center mt-4">
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
    >
      <path
        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
      ></path>
    </svg>
    <div>
      <div
        class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
      ></div>
      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
    </div>
  </div>
  <span class="sr-only">Loading...</span>
</div>
</div>
  );
}

//---------- Preloader wrapper component
function AppWithPreloader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Preloader /> : <Outlet />;
}

//------------------ Define all routes
const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppWithPreloader />}>
        <Route index element={<Home />} />
      <Route path="/" element={<LayoutOne />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/SinglePage/:productId" element={<SinglePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Route>
  )
);

// --------------Main App
export default function App() {
  return <RouterProvider router={myRoute} />;
}

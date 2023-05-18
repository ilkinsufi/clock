import "./App.css";
import "./Responsive.css";
import { Suspense } from "react";
import { lazy, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import BlogDetails from "./pages/BlogDetails";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Shop = lazy(() => import("./pages/Shop"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Details = lazy(() => import("./pages/Details"));
const Basket = lazy(() => import("./pages/Basket"));
const Account = lazy(() => import("./pages/Account"));
const Favorites = lazy(() => import("./pages/Favorites"));
// const Registration = lazy(() => import("./pages/Registration"));

function App({ dispatch }) {
  let { pathname } = useLocation();

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("fav"));
    if (storedFav) {
      dispatch({
        type: "SET_FAV",
        payload: storedFav,
      });
    }
  }, []);

  useEffect(() => {
    // fetch("http://localhost:3000/products")
    fetch("https://api.npoint.io/9d132f6040324e22caba/products")
      // fetch("https://api.jsonbin.io/v3/b/644ee2459d312622a3551fc9")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: json,
        });
      });
  }, []);
  return (
    <>
      {pathname !== "/not-found" && <Header />}
      <Routes>
        <Route
          path="/not-found"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/account"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Account />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Favorites />
            </Suspense>
          }
        />

        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/basket"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Basket />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BlogDetails />
            </Suspense>
          }
        />

        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Navigate to="/not-found" />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);

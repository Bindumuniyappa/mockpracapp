import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import AppStore from "./redux/AppStore";
import appStore from "./redux1/ConfigStore";
import UserContext from "./CommonComp/UserContext";
import Home from "./Routing/Home";
import Contact from "./Routing/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const CreateRoute = createBrowserRouter([
//   {
//     path: "/",
//     Element: <App />,
//     children: [
//       {
//         path: "/home",
//         Element: <Home />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
root.render(
  <React.StrictMode>
    {/* <Provider store={appStore}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>

  // <RouterProvider route={CreateRoute} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

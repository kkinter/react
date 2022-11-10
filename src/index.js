import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { CookiesProvider } from 'react-cookie';


const context = React.createContext();
export const CtxConsumer = context.Consumer;

const animals = ['snake', 'elephant', 'lion']

const router = createBrowserRouter([
  {
      path: "/",
      element : <App />,
  },
  {
    path: "/header",
    element : <Header info="this is MY msg"/>,
  },
  {
    path: "/footer",
    element : <Footer />,
  }
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <context.Provider value={{animals : animals}}>
        <RouterProvider router={router} />
      </context.Provider>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

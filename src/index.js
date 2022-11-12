// react imports
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


// components
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Account from './components/Account';

// create root and connect to HTML
const appElement = document.getElementById('app');
const root = createRoot(appElement);

// create router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "vehicles",
        element: <Vehicles />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "testimonials",
        element: <Testimonials />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "account",
        element: <Account />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);
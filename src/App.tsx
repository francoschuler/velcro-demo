import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import EventsList from './pages/EventsList/EventsList';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/map",
      element: <Map />,
    },
    {
        path: "/events-list",
        element: <EventsList />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';

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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

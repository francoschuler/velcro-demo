import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import EventsList from './pages/EventsList/EventsList';
import EventDetail from './pages/EventDetail/EventDetail';
import { Box } from '@chakra-ui/react';

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
    {
        path: "/events-list/:eventId",
        element: <EventDetail />,
    },
  ]);

  return (
    <Box maxW={'100%'} minH={'100vh'} padding={'2rem'}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;

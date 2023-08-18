import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import EventsList from './pages/EventsList/EventsList';
import EventDetail from './pages/EventDetail/EventDetail';
import { Box } from '@chakra-ui/react';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <Box maxW={'100%'} minH={'100vh'} padding={'2rem'}>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events-list" element={<EventsList />} />
        <Route path="/events-list/:eventId" element={<EventDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Box>
  );
}

export default App;

import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import EventsList from './pages/EventsList/EventsList';
import EventDetail from './pages/EventDetail/EventDetail';
import { Box } from '@chakra-ui/react';
import Profile from './pages/Profile/Profile';
import EventForm from './pages/EventForm/EventForm';
import Notifications from './pages/Notifications/Notifications';
import NotificationsList from './pages/Notifications/NotificationsList';
import NotificationDetails from './pages/Notifications/NotificationDetails';
import "./assets/fonts/ArcadeClassic.ttf";
import Welcome from './pages/Welcome/Welcome';
import EventExplorer from './pages/EventExplorer/EventExplorer';
import OtherConfigurations from './pages/EventForm/OtherConfigurations';

function App() {

  return (
    <Box maxW={'100%'} minH={'100vh'} padding={'2rem'} >
      <Routes>
        <Route path="/" element={<Navigate to={'/welcome'} />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events-list" element={<EventsList />} />
        <Route path="/events-list/:eventId" element={<EventDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/create-event/other-configurations" element={<OtherConfigurations />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notifications/notifications-list" element={<NotificationsList />} />
        <Route path="/notifications/notifications-list/:idNotification" element={<NotificationDetails />} />
        <Route path="/event-explorer" element={<EventExplorer />} />
      </Routes>
    </Box>
  );
}

export default App;

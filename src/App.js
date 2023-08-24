import { Routes, Route} from 'react-router-dom';
import './App.css';
import Feed from './Feed/Feed';
import Post from './Feed/Post';
import Home from './Home/Home';
import ProfileInfo from './Feed/ProfileInfo';
import Connection from './Connection/Connection';
import EventHome from './Event/EventHome';
import GroupHome from './Group/GroupHome';
import { Notifications } from './Notifications/Notifications';
import LatestNews from './Latest News/LatestNews';
//import Story from './Story/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profileInfo" element={<ProfileInfo />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/eventHome" element={<EventHome/>} />
        <Route path="/latestNews" element={<LatestNews/>} />
        <Route path="/groupHome" element={<GroupHome/>} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
    </div>
  );
}

export default App;

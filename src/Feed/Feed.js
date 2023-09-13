import ProfileHeader from './ProfileHeader';
import Friend from './Friend';
import Photo from './Photo';
import About from './About';
import Post from './Post';
import Header from '../Header/Header';
import './feed.css';
import Connection from '../Connection/Connection';
import Experience from './Experience';
import ProfileInfo from './ProfileInfo';
import Media from './Media';
import Video from './Video';

export const Feed = ({route}) => {
    let componentToRender;
    switch (route) {
      case 'feed':
        componentToRender = <Post></Post>;
        break;
      case 'connection':
        componentToRender = <Connection/>;
        break;
      case 'profileInfo':
        componentToRender = <ProfileInfo/>;
        break;
      case 'media':
        componentToRender = <Media/>;
      break;
      case 'video':
        componentToRender = <Video/>;
      break;
      
      default:
        componentToRender = <Post />;
    }
  // const route = window.location.href.split('/').pop();
  return (
    <div className='Feed bg-light'>
      <Header/>
      <div className='Feed-item'>
        <div>
          <ProfileHeader></ProfileHeader>
          {componentToRender}
        </div>
        <div className='experience-photo-friend'>
          <About/>
          <Experience></Experience>
          <Photo></Photo>
          <Friend></Friend>
        </div>
      </div>
    </div>
  )
}
export default Feed;
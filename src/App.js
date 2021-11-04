import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ---------- Views
import AnalyticsView from './views/Analytics';
import BrowseView from './views/Browse';
import ChannelProfileView from './views/ChannelProfile';
import ChatView from './views/Chat';
import FollowingView from './views/Following';
import LoginView from './views/Login';
import NewsFeedView from './views/NewsFeed';
import PlaylistView from './views/Playlist';
import SettingsView from './views/Settings';
import TrendingView from './views/Trending';
import UploadView from './views/UploadVideos';
import UserVideosView from './views/UserVideos';
import VideoView from './views/Video';
import PrimaryAppBar from './components/PrimaryAppBar';
import PrimaryAppDrawer from './components/PrimaryAppDrawer';

const ApplicationRoutes = () => [
  { path: '/analytics', view: AnalyticsView },
  { path: '/channel/:uuid', view: ChannelProfileView },
  { path: '/browse', view: BrowseView },
  { path: '/chat', view: ChatView },
  { path: '/following', view: FollowingView},
  { path: '/login', view: LoginView },
  { path: '/playlist', view: PlaylistView },
  { path: '/settings', view: SettingsView },
  { path: '/trending', view: TrendingView },
  { path: '/UploadView', view: UploadView },
  { path: '/videos', view: UserVideosView },
  { path: '/video/:uuid', view: VideoView },
].map(route => <Route path={route.path} element={route.view} />)

function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <PrimaryAppDrawer />
      <Routes>
        <Route path="/">
          <Route index element={<NewsFeedView />} />
          {/*{ ApplicationRoutes }*/}
        </Route>
      </Routes>
    </div>
  )
}

export default App

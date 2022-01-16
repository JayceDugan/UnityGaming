import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Components } from '@mui/material';
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import {
  Link as RouterLink,
  LinkProps
} from 'react-router-dom'
import { useState } from 'react'

import ApplicationHeader from './features/application-header/ApplicationHeader';
import ApplicationDrawer from './features/application-drawer/ApplicationDrawer';

// ---------- Views
// import AnalyticsView from './views/Analytics';
// import BrowseView from './views/Browse';
// import ChannelProfileView from './views/ChannelProfile';
// import ChatView from './views/Chat';
// import FollowingView from './views/Following';
// import LoginView from './views/Login';
import NewsFeedView from './views/NewsFeed';
// import PlaylistView from './views/Playlist';
// import SettingsView from './views/Settings';
// import TrendingView from './views/Trending';
// import UploadView from './views/UploadVideos';
// import UserVideosView from './views/UserVideos';
// import VideoView from './views/Video';
import NotFoundView from './views/NotFound';

import { Provider } from 'react-redux'
import store from './store'

// const ApplicationRoutes = () => [
//   { path: '/analytics', view: AnalyticsView },
//   { path: '/channel/:uuid', view: ChannelProfileView },
//   { path: '/browse', view: BrowseView },
//   { path: '/chat', view: ChatView },
//   { path: '/following', view: FollowingView},
//   { path: '/login', view: LoginView },
//   { path: '/playlist', view: PlaylistView },
//   { path: '/settings', view: SettingsView },
//   { path: '/trending', view: TrendingView },
//   { path: '/UploadView', view: UploadView },
//   { path: '/videos', view: UserVideosView },
//   { path: '/video/:uuid', view: VideoView },
// ].map(route => <Route path={route.path} element={route.view} />)

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { to, ...other } = props;
  return <RouterLink data-testid="custom-link" ref={ref} to={to} {...other} />;
});

LinkBehavior.propTypes = {
  to: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string])
    .isRequired,
};

declare module '@mui/material/styles' {
  interface Theme {
    components: Components
  }
}

const themeOptions = {
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#6c5dd3',
      light: 'rgba(207,200,255,0.5)',
      dark: '#cfc8ff',
    },
    secondary: {
      main: '#0049c6',
      light: '#3f8ccf',
      dark: '#002685',
    },
    text: {
      primary: '#11142d',
      secondary: '#808191',
      disabled: '#e4e4e4',
    },
    error: {
      main: '#ffa2c0',
      dark: '#ffb7f5',
      light: 'rgba(255,183,245,0.5)',
    },
    warning: {
      main: '#FF754C',
      light: '#ffce73',
      dark: '#ff9a7b',
      contrastText: 'rgba(255, 255, 255, 0.87)'
    },
    success: {
      main: '#7fba7a',
    },
    info: {
      main: '#3f8cff',
    },
    divider: '#e4e4e4',
  },
  typography: {
    h1: { fontFamily: 'Poppins' },
    h2: { fontFamily: 'Poppins' },
    h3: { fontFamily: 'Poppins' },
    h4: { fontFamily: 'Poppins' },
    h5: { fontFamily: 'Poppins' },
    h6: { fontFamily: 'Poppins' },
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
};

const theme = createTheme(themeOptions)

const drawerWidth = 240

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ApplicationHeader drawerWidth={drawerWidth} drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer}/>
          <ApplicationDrawer drawerWidth={drawerWidth} drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` }, marginLeft: { md: 'auto' } }}
          >
            <Routes>
              <Route index path="/" element={<NewsFeedView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </Box>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App

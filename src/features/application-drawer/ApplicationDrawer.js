import * as React from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer'
import Hidden from '@mui/material/Hidden'
import NewFeeds from './NewFeeds'
import FollowingNavList from '../following-nav-list/FollowingNavList'
import LogoLight from '../../icons/logo-light.svg'
import SettingsNavigation from './SettingsNavigation';

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DesktopDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function ResponsiveDrawer(props) {
  const { window } = props;

  const drawerInner = (
    <div>
      <Hidden smDown>
        <Toolbar sx={{ py: { md: 2 } }}>
            <Link to="/">
              <img src={LogoLight} alt={''} />
            </Link>
        </Toolbar>
      </Hidden>
      <Box sx={{ px: 3, py: { xs: (40 / 8), sm: 3 } }}>
        <NewFeeds />
        <Divider sx={{ my: 3 }} />
        <FollowingNavList />
        <Divider sx={{ my: 3 }} />
        <SettingsNavigation />
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: 'flex' }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <MuiDrawer
        container={container}
        variant="temporary"
        open={props.drawerIsOpen}
        onClose={props.toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        BackdropProps={{
          invisible: true
        }}
        sx={{
          flexShrink: 0,
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', top: '96px', boxShadow: 'none' },
        }}
      >
        {drawerInner}
      </MuiDrawer>
      <DesktopDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, boxShadow: 'inset -1px 0px 0px #E4E4E4;' },
        }}
        open
      >
        {drawerInner}
      </DesktopDrawer>
    </Box>
  );
}

export default ResponsiveDrawer;

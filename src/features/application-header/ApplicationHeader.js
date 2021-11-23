import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Hidden from '@mui/material/Hidden'
import MuiAppBar from '@mui/material/AppBar'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SMSIcon from '@mui/icons-material/SmsOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import Avatar from '../../icons/Avatar.svg'
import ResourceSearch from '../resource-search/ResourceSearch'
import BrowseDropdown from '../browse-dropdown/BrowseDropdown'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
      transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  })
}))

export default function ApplicationHeader(props) {
  return (
    <AppBar
      color='transparent'
      position="sticky"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        background: '#FFF',
        boxShadow: 'none'
      }}
      open={props.drawerIsOpen}
    >
      <Grid container sx={{
        py: { xs: 3.5, md: 4 },
        px: { xs: 3.5, md: 8 }
      }} alignItems="center">
        <Hidden mdUp>
          <Grid item xs={4} sm={8}>
            <IconButton onClick={props.toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item sm={8} container direction="row" alignItems="center" justifyContent="flexEnd" spacing={4}>
            <Grid item xs={6}>
              <BrowseDropdown />
            </Grid>
            <Grid item xs={6}>
              <ResourceSearch />
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={8} sm={4}>
          <Stack direction="row" spacing={3} justifyContent="flex-end">
            <Hidden mdDown>
              <IconButton>
                <SMSIcon />
              </IconButton>
            </Hidden>
            <Hidden mdUp>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Hidden>
            <IconButton size="small">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton sx={{ height: 40, width: 40 }} >
              <img src={Avatar} height={'100%'} alt={''}/>
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  )
}

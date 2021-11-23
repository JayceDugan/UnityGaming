import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import SettingsNavigationItem from './SettingsNavigationItem'

import SMSIcon from '@mui/icons-material/SmsOutlined'
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

export default function SettingsNavigation(props) {
  const links = [
    {
      icon: <SMSIcon />,
      title: 'Chat',
      badge: '20'
    },
    {
      icon: <SettingsIcon />,
      title: 'Settings',
      badge: false
    }
  ]

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle" color="text.secondary" sx={{ fontSize: 12 }}>Unity Gaming</Typography>
      </Box>
      <List>
        { links.map(link => <SettingsNavigationItem { ...link} /> )}
      </List>
    </Box>
  )
}

SettingsNavigation.props = {
  links:  PropTypes.array,
  subtitle: PropTypes.string
}

SettingsNavigation.defaultProps = {
  links: [],
  subtitle: ''
}

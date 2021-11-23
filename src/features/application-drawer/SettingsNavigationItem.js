import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { matchPath, useLocation } from 'react-router'
import MuiListItem from '@mui/material/ListItem'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'

export default function SettingsNavigationItem(props) {
  const location = useLocation()
  const theme = useTheme()

  const isCurrentRoute = !!matchPath(location.pathname, props.link)

  const ListItem = styled(MuiListItem)({
    background: isCurrentRoute ? theme.palette.primary.main : 'transparent',
    color: isCurrentRoute ? theme.palette.primary.contrastText : theme.palette.text.secondary,
    borderRadius: 12,
    pa: 2.5,

    '&:hover, &:active, &:focus': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '.MuiListItemIcon-root': {
        color: theme.palette.primary.contrastText,
      }
    }
  })

  const ListItemIcon = styled(MuiListItemIcon)({
    color: isCurrentRoute ? theme.palette.primary.contrastText : theme.palette.text.secondary,
    minWidth: '38px',
  })

  return (
    <ListItem
      component={ Link }
      button
      to={ props.link }
    >
      { props.icon && <ListItemIcon>{ props.icon }</ListItemIcon> }
      { props.title && <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={props.title} inset={!props.icon} /> }
    </ListItem>
  )
}

SettingsNavigationItem.props = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    null
  ]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

SettingsNavigationItem.defaultProps = {
  icon: null,
  title: '',
  link: ''
}

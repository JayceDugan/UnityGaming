import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import NavigationListItem from './NavigationListItem'

export default function NavigationList(props) {
  const subtitleProvided = Object.prototype.hasOwnProperty.call(props, 'subtitle') && props.subtitle && props.subtitle.length
  const linksProvided =  Object.prototype.hasOwnProperty.call(props, 'links') && props.links && props.links.length

  return (
    <Box>
      { subtitleProvided && (
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle" color="text.secondary" sx={{ fontSize: 12 }}>{ props.subtitle }</Typography>
        </Box>
      )}
      { linksProvided && (
        <List>
          { props.links.map(link => <NavigationListItem { ...link} /> )}
        </List>
      )}
    </Box>
  )
}

NavigationList.props = {
  links:  PropTypes.array,
  subtitle: PropTypes.string
}

NavigationList.defaultProps = {
  links: [],
  subtitle: ''
}

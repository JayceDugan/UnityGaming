import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FollowingNavListItem from './FollowingNavListItem'

export default function FollowingNavList() {
  return (
    <Box>
      <Box sx={{ marginBottom: 2}}>
        <Typography variant="subtitle" color="text.secondary" sx={{ fontSize: 12 }}>Following</Typography>
      </Box>
      {
        [
          { name: 'Dylan Hodges', active: false, link: '/channels/dylan-hodges' },
          { name: 'Vincent Parks', active: true, link: '/channels/vincent-parks' },
          { name: 'Richard Bowers', active: false, link: '/channels/richard-bowers' },
          { name: 'Isaac Lambert', active: false, link: '/channels/isaac-lambert' },
          { name: 'Lillie Nash', active: true, link: '/channels/lillie-nash' },
          { name: 'Edith Cain', active: false, link: '/channels/edith-cain' },
          { name: 'Jerry Sherman', active: true, link: '/channels/jerry-sherman' }
        ].map(item => <FollowingNavListItem { ...item } /> )
      }
    </Box>
  )
}

FollowingNavList.props = {

}

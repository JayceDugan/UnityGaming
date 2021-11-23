import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import FollowedChannelsListItem from './FollowedChannelsListItem';
import Titlebar from '../../components/titlebar/Titlebar'

export default function FollowedChannelsList() {
  const stackItems = [
    { name: 'Dylan Hodges', active: false, link: '/channels/dylan-hodges' },
    { name: 'Vincent Parks', active: true, link: '/channels/vincent-parks' },
    { name: 'Richard Bowers', active: false, link: '/channels/richard-bowers' },
    { name: 'Isaac Lambert', active: false, link: '/channels/isaac-lambert' },
    { name: 'Lillie Nash', active: true, link: '/channels/lillie-nash' },
    { name: 'Edith Cain', active: false, link: '/channels/edith-cain' },
    { name: 'Jerry Sherman', active: true, link: '/channels/jerry-sherman' }
  ].map(item => <FollowedChannelsListItem { ...item } /> )

  return (
    <Box className="shadow-el" sx={{ borderRadius: '24px', py: 5, px: 4, background: "#FFF" }} >
      <Titlebar variant="h6" title="From Channels You Follow" />

      <Stack spacing={4} direction="row" justifyContent="space-between">
        { stackItems }
      </Stack>
    </Box>
  )
}

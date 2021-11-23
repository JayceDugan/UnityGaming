import PageLayout from '../layouts/Page'
import LiveChannelsFeed from '../features/live-channels-feed/LiveChannelsFeed'
import FeaturedStreamsSlider from '../features/featured-streams-slider/FeaturedStreamsSlider';
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import FollowedChannelsList from '../features/followed-channels-list/FollowedChannelsList';
import Container from '@mui/material/Container'

const NewsFeedView = () => (
  <PageLayout>
    <Grow in={true}>
      <Box sx={{ marginBottom: 4 }}>
        <FeaturedStreamsSlider />
      </Box>
    </Grow>

    <Container>
      <Box sx={{ marginBottom: (54 / 8) }}>
        <LiveChannelsFeed limit={4} sortingEnabled />
      </Box>

      <Box>
        <FollowedChannelsList />
      </Box>
    </Container>
  </PageLayout>
)

export default NewsFeedView

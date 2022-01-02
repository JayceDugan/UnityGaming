import Grid from '@mui/material/Grid';
import ChannelCard from '../../components/channel-card/ChannelCard';
import Slide from '@mui/material/Slide'

import PropTypes from 'prop-types'

export default function ChannelsList(props) {
  const channelsListItems = props.channels.map((channelData, idx) => (
    <Slide in={true} direction="up" timeout={1000} style={{ transitionDelay: `500ms` }}>
      <Grid item xs={12} md={4} lg={3} key={`live-channel-${idx}`} container justifyContent="center" sx={{ paddingTop: 0 }}>
          <ChannelCard data={channelData} sx={{ margin: '0 auto' }} loading={props.loading} />
      </Grid>
    </Slide>
  ))

  return (
    <Grid
      container
      spacing={8}
    >
      { channelsListItems }
    </Grid>
  )
}

ChannelsList.props = {
  channels: PropTypes.array,
  loading: PropTypes.bool
}

ChannelsList.defaultProps = {
  channels: [],
  loading: false
}

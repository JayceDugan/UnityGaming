import PropTypes from 'prop-types'
import CardActions from '@mui/material/CardActions';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function ChannelCardActions(props) {
  const formatViewerCount = (n) => (n < 1e3) ? n : +(n / 1e3).toFixed(1) + "K"
  const viewerCount = formatViewerCount((props.data && props.data.viewer_count) || 0)

  return (
    <CardActions sx={{ padding: 2 }}>
      { props.loading ? (
        <>
          <Skeleton height={40} width={80} />
          <Skeleton height={40} width={40} />
          <Skeleton height={10} width={60} />
        </>
      ) : (
        <>
          <Button size="small" variant="contained" color="warning" sx={{ textTransform: 'none' }}><WifiIcon sx={{ marginRight: 1 }}/> Live</Button>
          <Button size="small" sx={{ textTransform: "none", color: 'text.secondary' }}>
            <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'secondary.main', marginRight: 1 }}></Box>
            { viewerCount } watching</Button>
        </>
      )}
    </CardActions>
  )
}

ChannelCardActions.props = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

ChannelCardActions.defaultProps = {
  loading: false,
  data: {}
}

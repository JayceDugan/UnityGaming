import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import faker from 'faker';
import WifiIcon from '@mui/icons-material/Wifi';
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import DummyBackground from '../../lib/dummy-data/background-image.jpg'

import './FeaturedStreamsSlider.css'
import Skeleton from '@mui/material/Skeleton';

export default function FeaturedStreamsSlider() {
  const [gameAvatarLoading, setGameAvatarLoading] = useState(true)
  const [activeChannel] = useState(0)
  const channels = useSelector(state => state.liveChannels.data.slice(0, 3))
  const loading = useSelector(state => state.liveChannels.loading )
  const channel = (channels[activeChannel]) || {}
  // const Background = (channel && channel.thumbnail_url && channel.thumbnail_url.replace('{width}', '4000').replace('{height}', '600')) || ''
  const Background = DummyBackground

  return (
    <Box sx={{
        // backgroundImage: 'url('.concat(activeSlide.video_banner).concat(')'),
        '&::after': {
          background: `linear-gradient(360deg, rgba(27, 29, 33, 0.769012) 33.51%, rgba(27, 29, 33, 0.0001) 100%), url(${Background}) top/cover no-repeat padding-box`,
        }
      }}
      className='featured-streams-slider'
    >
      <Container>
        <Grid item xs={12}>
           { loading ? (
              <Skeleton height={40} width={80} sx={{ bgcolor: 'grey.300' }}/>
           ) : (
             <Button
               disabled={channel.type !== 'live'}
               size="small"
               variant="contained"
               color="warning"
               sx={{ textTransform: 'none', marginBottom: 1 }}><WifiIcon sx={{ marginRight: 1 }}
             />
               { channel.type === 'live' ? 'Live' : 'Offline' }
             </Button>
           )}

           <Typography
             variant="h4"
             color="white"
             sx={{
               overflow: 'hidden',
               display: { xs: '-webkit-box', md: 'block' },
               '-webkit-line-clamp': '3',
               '-webkit-box-orient': 'vertical',
               marginBottom: 2,
               maxWidth: '100%',
               width: { xs: '100%', 'md': 525 }
             }}
           >
             { loading
               ? <Skeleton sx={{ bgcolor: 'grey.300' }} />
               : 'Renegades vs Chiefs - ESL ProLeague Season 16 - Playoffs'
             }
           </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
            { (loading || gameAvatarLoading) ? (
              <Skeleton variant="circular" sx={{ bgcolor: 'grey.300', height: 24, width: 24, marginRight: 1 }} >
                <Avatar />
              </Skeleton>
             ) : null}

            <Avatar
              src={ faker.image.avatar() }
              sx={!loading && !gameAvatarLoading ? { marginRight: 1, width: 24, height: 24 } : { display: 'none' }}
              onLoad={() => setGameAvatarLoading(false)}
            >
              <PersonOutlineIcon />
            </Avatar>
            <Typography color="white">
              { loading
                ? <Skeleton sx={{ bgcolor: 'grey.300', width: '150px' }}/>
                : channel.game_name
              }</Typography>
            <Box sx={{ width: 8, height: 8, background: '#FFF', borderRadius: '50%', margin: '0 12px' }} />
            <Typography color="white">
              { loading ? <Skeleton sx={{ bgcolor: 'grey.300', width: 100 }} /> : `${channel.viewer_count} watching` }
            </Typography>
          </Box>
          { loading
            ? <Skeleton height={80} width={120} sx={{ bgcolor: 'grey.300' }} />
            : (
              <Button variant="contained" size="large" color="primary" sx={{ fontWeight: 'bold', textTransform: 'none', padding: '18px 43px', borderRadius: 3 }}>
                Watch
              </Button>
            )}
        </Grid>
        <Grid item container xs={12} justifyContent="space-between" spacing={5}>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

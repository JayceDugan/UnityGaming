import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import faker from 'faker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useState } from 'react';

export default function ChannelCardContent(props) {
  const [avatarLoading, setAvatarLoading] = useState(true)

  const data = props.data
  const title = (data && data.title) || ''
  const channelUserName = (data && data.user_name) || ''
  const gameName = (data && data.game_name) || ''

  const avatarLoadingHandler = () => {
    setTimeout(function() {
      setAvatarLoading(false)
    }, 3000)
  }

  return (
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          overflow: 'hidden',
          minHeight: 64,
          display: { xs: '-webkit-box' },
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          fontWeight: 500
        }}
      >
        { props.loading ? <Skeleton /> : title }
      </Typography>

      <ListItem sx={{ padding: 0 }}>
        <ListItemAvatar>
          { (props.loading || avatarLoading) ? (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) : null }

          <Avatar src={ faker.image.avatar() } onLoad={avatarLoadingHandler} sx={(!avatarLoading && !props.loading) ? {} : { display: 'none' } }>
            <PersonOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={ props.loading ? <Skeleton /> : channelUserName }
          secondary={ props.loading ? <Skeleton /> : gameName }
          sx={{ padding: 0 }}
        />
      </ListItem>
    </CardContent>
  )
}

ChannelCardContent.props = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

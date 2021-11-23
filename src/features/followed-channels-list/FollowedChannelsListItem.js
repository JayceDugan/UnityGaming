import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import WifiIcon from '@mui/icons-material/Wifi';
import Avatar from '@mui/material/Avatar';
import faker from 'faker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export default function FollowedChannelsListItem(props) {
  const theme = useTheme()
  const [avatarLoading, setAvatarLoading] = useState(true)

  const avatarLoadedHandler = () => setAvatarLoading(false)

  const Item = styled(Paper)()

  return (
    <Item
      component={ Link }
      button
      to={ props.link }
      secondaryAction={
        props.active
          ? <Box sx={{ width: 11, height: 11, background: theme.palette.success.main, borderRadius: '50%', marginRight: '2px' }} />
          : <WifiIcon sx={{ width: 14, height: 14, color: theme.palette.text.secondary }} />
      }
      sx={{
        py: 2,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      elevation={0}
    >
      { (props.loading || avatarLoading) ? (
        <Skeleton variant="circular" sx={{ margin: '0 auto' }}>
          <Avatar sx={{ height: 62, width: 62 }}/>
        </Skeleton>
      ) : null }

      <Avatar src={ faker.image.avatar() } onLoad={avatarLoadedHandler} sx={(!avatarLoading && !props.loading) ? { height: 62, width: 62, margin: '0 auto' } : { display: 'none' } }>
        <PersonOutlineIcon />
      </Avatar>

      <Typography
        sx={{
          color: theme.palette.text.primary,
          fontWeight: '600!important',
          textDecoration: 'none',
          marginTop: 2,
          marginBottom: 1
        }}
      >
        { props.name }
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontWeight: '600!important' }} variant="subtitle2">
        14 Minutes Ago
      </Typography>
    </Item>
  )
}

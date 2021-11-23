import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import WifiIcon from '@mui/icons-material/Wifi';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import faker from 'faker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles'
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';
import { useState } from 'react'

export default function FollowingNavListItem(props) {
  const theme = useTheme()
  const [avatarLoading, setAvatarLoading] = useState(true)

  const avatarLoadedHandler = () => setAvatarLoading(false)

   return (
     <ListItem
       component={ Link }
       button
       to={ props.link }
       secondaryAction={
         props.active
           ? <Box sx={{ width: 11, height: 11, background: theme.palette.success.main, borderRadius: '50%', marginRight: '2px' }} />
           : <WifiIcon sx={{ width: 14, height: 14, color: theme.palette.text.secondary }} />
       }
       sx={{ py: 2 }}
     >
       <ListItemAvatar sx={{ minWidth: '38px' }}>
         { (props.loading || avatarLoading) ? (
           <Skeleton variant="circular">
             <Avatar sx={{ height: 24, width: 24 }}/>
           </Skeleton>
         ) : null }

         <Avatar src={ faker.image.avatar() } onLoad={avatarLoadedHandler} sx={(!avatarLoading && !props.loading) ? { height: 24, width: 24 } : { display: 'none' } }>
           <PersonOutlineIcon />
         </Avatar>
       </ListItemAvatar>
       <ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={props.name} sx={{ color: theme.palette.text.secondary, fontWeight: '600!important' }}/>
     </ListItem>
   )
}

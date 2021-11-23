import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';

export default function ChannelCardImage(props) {
  const [imageLoading, setImageLoading] = useState(true)

  const data = props.data
  const image = (data && data.thumbnail_url && data.thumbnail_url.replace('{width}', '345').replace('{height}', '170')) || ''

  const imageLoadHandler = () => {
    setTimeout(function() {
      setImageLoading(false)
    }, 3000)
  }

  return (
    <>
      { (props.loading || imageLoading) ? (
        <Fade in={true}>
          <Skeleton variant="rectangular" height={170} sx={{ borderRadius: '24px 24px 0 0' }} />
        </Fade>
      ) : null }

      <CardMedia
        component="img"
        height="170"
        image={image}
        alt="green iguana"
        onLoad={imageLoadHandler}
        sx={ !imageLoading ?  { borderRadius: '24px 24px 0 0' } : { display: 'none' }}
      />
    </>
  )
}

ChannelCardImage.props = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

ChannelCardImage.props = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

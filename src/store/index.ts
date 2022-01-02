import { configureStore } from '@reduxjs/toolkit'
import liveChannelsReducer from '../features/live-channels-feed/liveChannelsFeedSlice'
import featuredStreamsReducer from '../features/featured-streams-slider/FeaturedStreamsSliderSlice'

export default configureStore({
  reducer: {
    liveChannels: liveChannelsReducer,
    featuredStreams: featuredStreamsReducer
  }
})

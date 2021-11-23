import { createSlice } from '@reduxjs/toolkit'

export const FeaturedStreamsSliderSlice = createSlice({
  name: 'featuredStreams',
  initialState: {
    data: [
      {
        "image": "https://s.jtvnw.net/jtv_user_pictures/hosted_images/bethesda_fp_novTESL",
        "priority": 3,
        "scheduled": true,
        "sponsored": false,
        "stream": {
          "_id": 23939485488,
          "average_fps": 30.9441111462,
          "channel": {
            "_id": 614394,
            "broadcaster_language": "en",
            "created_at": "2008-05-22T14:22:36Z",
            "display_name": "Bethesda",
            "followers": 172116,
            "game": "The Elder Scrolls: Legends",
            "language": "en",
            "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/bethesda-profile_image-1d57ec1547f63ac8-300x300.jpeg",
            "mature": true,
            "name": "bethesda",
            "partner": true,
            "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/bethesda-profile_banner-fcc5a8df410baa06-480.jpeg",
            "profile_banner_background_color": null,
            "status": "The Elder Scrolls: Legends - Chaos Arena with Pete Hines - Thursday, December 15 at 3:00 PM EST",
            "updated_at": "2016-12-15T20:05:12Z",
            "url": "https://www.twitch.tv/bethesda",
            "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/bethesda-channel_offline_image-d78d871c05aeadd7-1920x1080.jpeg",
            "views": 9094715
          },
          "created_at": "2016-12-15T19:54:31Z",
          "delay": 0,
          "game": "The Elder Scrolls: Legends",
          "is_playlist": false,
          "preview": {
            "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_bethesda-640x360.jpg",
            "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_bethesda-320x180.jpg",
            "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_bethesda-80x45.jpg",
            "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_bethesda-{width}x{height}.jpg"
          },
          "video_height": 1080,
          "viewers": 1724
        },
        "text": "<p>Bethesda\u2019s Pete Hines is back for more Arena and Deckbuilding in The Elder Scrolls: Legends. Download and play for free today!</p>\n\n<br>\n\n\n<p><a href=\"/bethesda\">Click here</a> to watch and chat!</p>\n\n<p><a href=\"pubdev,devrecurring\"></a></p>\n",
        "title": "Bethesda Plays The Elder Scrolls: Legends | More Arena & Deckbuilding"
    }],
    activeSlideIndex: 0,
    loading: true,
    failed: false
  },
  reducers: {
    goToSlideIndex: (state, action) => {
      state.activeSlideIndex = action.payload
    },
    goToNextSlide: (state) => {
      state.activeSlideIndex += 1
    },
    goToPrevSlide: (state) => {
      state.activeSlideIndex -= 1
    },
    setFeaturedStreams: (state, action) => {
      state.data = [...action.payload]
    },
    setLoadingFeaturedStreams: (state, action) => {
      state.loading = action.payload
    },
    setFailedFeaturedStreams: (state, action) => {
      state.failed = action.payload
    }
  }
})

export const { setFeaturedStreams, setLoadingFeaturedStreams, setFailedFeaturedStreams } = FeaturedStreamsSliderSlice.actions
export default FeaturedStreamsSliderSlice.reducer

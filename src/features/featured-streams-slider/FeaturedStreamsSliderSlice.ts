import { createSlice } from '@reduxjs/toolkit'

export const FeaturedStreamsSliderSlice = createSlice({
  name: 'featuredStreams',
  initialState: {
    data: [],
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

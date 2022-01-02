import { createSlice } from '@reduxjs/toolkit'

export const TwitchSlice  = createSlice({
  name: 'twitchSlice',
  initialState: {
    streams: {
      data: [],
      loading: false,
      failed: false
    },
  },
  reducers: {
    setStreams: (state, action) => {
      state.streams.data = [...action.payload]
    },
    setLoadingStreams: (state, action) => {
      state.streams.loading = action.payload
    },
    setFailedLoadingStreams: (state, action) => {
      state.streams.failed = action.payload
    }
  }
})

export const { setStreams, setLoadingStreams, setFailedLoadingStreams } = TwitchSlice.actions
export default TwitchSlice.reducer

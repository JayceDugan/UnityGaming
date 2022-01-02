import { createSlice } from '@reduxjs/toolkit';

export const liveChannelsFeedSlice = createSlice({
  name: 'liveChannelsFeed',
  initialState: {
    data: [],
    loading: false,
    failed: false
  },
  reducers: {
    setLiveChannels: (state, action) => {
      state.data = [...action.payload]
    },
    setLoadingLiveChannels: (state, action) => {
      state.loading = action.payload
    },
    setFailedLiveChannels: (state, action) => {
      state.failed = action.payload
    }
  }
})

export const { setLiveChannels, setLoadingLiveChannels, setFailedLiveChannels } = liveChannelsFeedSlice.actions
export default liveChannelsFeedSlice.reducer

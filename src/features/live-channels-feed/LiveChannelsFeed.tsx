import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

// Services
import Twitch from '../../lib/services/Twitch'

// Redux
import { setLiveChannels, setLoadingLiveChannels, setFailedLiveChannels } from './liveChannelsFeedSlice';

// Components
import Titlebar from '../../components/titlebar/Titlebar';
import ChannelsList from '../channels-list/ChannelsList';
import LiveChannelsFeedError from './LiveChannelsFeedError';

export default function LiveChannelsFeed() {
  const channels = useSelector(state => state.liveChannels.data)
  const loading = useSelector(state => state.liveChannels.loading )
  const failed = useSelector(state => state.liveChannels.failed )
  const dispatch = useDispatch()

  const fetchStreams = async () => {
    try {
      dispatch(setFailedLiveChannels(false))
      dispatch(setLoadingLiveChannels(true))
      const streams = await Twitch.getStreams(4)
      dispatch(setLiveChannels(streams.data))
      dispatch(setLoadingLiveChannels(false))
    } catch (err) {
      console.error((err.statusText) || (err.message) || (err))
      setFailedLiveChannels(true)
    }
  }  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchStreams()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Titlebar title="Live Channels" defaultOption='recently-started' />
      { failed
        ? <LiveChannelsFeedError retry={fetchStreams} />
        : <ChannelsList channels={ loading ? Array(3).fill() : channels.slice(3, 7) } loading={loading} />
      }
    </>
  )
}

LiveChannelsFeed.props = {
  sortingEnabled: PropTypes.bool,
  limit: PropTypes.number
}

LiveChannelsFeed.defaultProps = {
  sortingEnabled: true,
  limit: 3
}

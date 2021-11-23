import Request from '../utils/request'

class TwitchClient {
  constructor(config) {
    this.baseURL = 'https://api.twitch.tv/helix'
    this.applicationID = (config.applicationID) || ''
    this.clientID = (config.clientID) || ''
    this.endpoints = (config.endpoints)
  }

  get authorizationHeaders() {
    return {
      'Authorization': 'Bearer '.concat(this.applicationID),
      'Client-Id': this.clientID
    }
  }

  getStreams(options = {}) {
    const requestURL = this.baseURL.concat(this.endpoints.streams, `?first=${(options.limit) || 10}`)
    const requestOptions = {
      headers: { ...this.authorizationHeaders }
    }

    return Request.get(requestURL, requestOptions)
  }

  getFeaturedStreams(options = {}) {
    const requestURL = this.baseURL.concat(this.endpoints.streams, `?first=${(options.limit) || 4}`)
    const requestOptions = {
      headers: { ...this.authorizationHeaders }
    }

    return Request.get(requestURL, requestOptions)
  }
}

const twitchInstance = new TwitchClient({
  baseURL: 'https://api.twitch.tv/helix',
  applicationID: 'i9gko13w3g764e1zgmozyjkg6jsnhq',
  clientID: '6dtb8l2r6rba9wgubsfhrlrt4hvsyf',
  endpoints: {
    streams: '/streams'
  }
})

export default twitchInstance

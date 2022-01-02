import Box from '@mui/material/Box'
import NavigationList from '../navigation-list/NavigationList'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import OnDemandVideoIcon from '@mui/icons-material/OndemandVideo'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

export default function NewFeeds() {
  const links = [
    {
      title: 'News Feeds',
      link: '/',
      icon: <SportsEsportsIcon />
    },
    {
      title: 'Trending',
      link: '/trending',
      icon: <TrendingUpIcon />
    },
    {
      title: 'Following',
      link: '/following',
      icon: <PersonOutlineIcon />
    },
    {
      title: 'Your Videos',
      link: '/your-videos',
      icon: <OnDemandVideoIcon />
    },
    {
      title: 'Playlist',
      link: '/playlist',
      icon: <ArticleOutlinedIcon />
    }
  ]

  return (
    <Box>
      <NavigationList
        links={links}
        subtitle={'New Feeds'}
      />
    </Box>
  )
}

import Typography from '@mui/material/Typography'
import PageLayout from '../layouts/Page'
import Box from '@mui/material/Box';
import DummyBackground from '../lib/dummy-data/background-image.jpg'
import Button from '@mui/material/Button'
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';

export default function NotFound() {
  return (
    <PageLayout>
      <Box
        sx={{
          height: { xs: 'calc(100vh - 96px)', md: 'calc(100vh - 104px)' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',

          '&::after': {
            content: '""',
            backgroundImage: `url(${DummyBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            position: 'absolute',
            maxWidth: '100vw',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }
        }}
      >
        <VideogameAssetOffIcon sx={{ fontSize: 90, color: "#FFF" }} />
        <Typography variant="h2" sx={{ color: "#FFF", marginBottom: 1.5 }}>Oops!</Typography>
        <Typography variant="body1" sx={{ color: "#FFF", marginBottom: 3 }}>We're sorry, we couldn't find what you were looking for.</Typography>
        <Button href="/" variant="contained">
          Return Home
        </Button>
      </Box>
    </PageLayout>
  )
}


import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';

export default function LiveChannelsFeedError(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ width: '100%', height: '300px', borderRadius: '24px' }} elevation={24}>
          <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <ErrorIcon sx={{ marginBottom: 1 }} />
            <Typography gutterBottom variant="h5" component="div" noWrap sx={{ marginBottom: 2 }}>
              Trouble loading Live Channels.
            </Typography>
            <Button variant="contained" size="small" color="secondary" onClick={props.retry}>
              <ReplayIcon sx={{ marginRight: 1 }} />
              Tap to Retry
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

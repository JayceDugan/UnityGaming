import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Titlebar(props) {
  return (
    <Grid item container xs={12} alignItems="center" sx={{ marginBottom: 5 }}>
      <Grid item xs={props.right ? 8 : 12}>
        <Typography variant={props.titleVariant}>{ props.title }</Typography>
      </Grid>
      { props.right && (
        <Grid item xs={12} md={4}>
          { props.right }
        </Grid>
      )}
    </Grid>
  )
}

Titlebar.propTypes = {
  title: PropTypes.string.isRequired,
  titleVariant: PropTypes.string,
  right: PropTypes.object
}

Titlebar.defaultProps = {
  title: '',
  titleVariant: 'h5',
  right: null
}

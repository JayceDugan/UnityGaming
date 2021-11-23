import Card from '@mui/material/Card';
import PropTypes from 'prop-types'

import ChannelCardImage from './ChannelCardImage';
import ChannelCardContent from './ChannelCardContent';
import ChannelCardActions from './ChannelCardActions';

export default function ChannelCard(props) {
  return (
    <Card sx={{ width: '100%', borderRadius: '24px', paddingTop: 0 }} elevation={0} className="shadow-el">
      <ChannelCardImage data={props.data} loading={props.loading} />
      <ChannelCardContent data={props.data} loading={props.loading} />
      <hr />
      <ChannelCardActions data={props.data} loading={props.loading }/>
    </Card>
  );
}

ChannelCard.props = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

ChannelCard.defaultProps = {
  loading: false,
  data: {}
}

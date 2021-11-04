import Box from '@mui/material/Box'

const PageLayout = (props) => (
  <Box sx={{ width: '100vw' }}>
    { props.children }
  </Box>
)

export default PageLayout

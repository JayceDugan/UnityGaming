import Titlebar from '../../components/titlebar/Titlebar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function PopularCategories() {
  const categories = [
    {
      "id": "33214",
      "name": "Fortnite",
      "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-700x700.jpg"
    }
  ]

  return (
    <Box>
      <Titlebar title="Popular Categories" />

      <Grid container>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Box>
  )
}

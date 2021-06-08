import { Container, Typography, makeStyles, Grid } from '@material-ui/core'
import Image1 from '../Images/taxi-381233.jpg'
import Image2 from '../Images/skateboarding-6310245.jpg'
import Image3 from '../Images/praha-5818649.jpg'
import Image4 from '../Images/car-1149997.jpg'

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#f5f9f8',
    paddingTop: 35,
    paddingBottom: 40,
  },

  headerText: {
    fontWeight: 'bold',
  },

  image: {
    height: 150,
    width: 200,
  },
}))

const MiddleBody = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Typography className={classes.headerText} variant="h4" align="center">
          Let Them Knew Why you're the Best
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          We're building on of the best theme, landing pages ever made history{' '}
        </Typography>

        <Grid container spacing={3} justify="center">
          <Grid item>
            <img className={classes.image} src={Image1} alt="image1" />
          </Grid>

          <Grid item>
            <img className={classes.image} src={Image2} alt="image2" />
          </Grid>

          <Grid item>
            <img className={classes.image} src={Image3} alt="image3" />
          </Grid>

          <Grid item>
            <img className={classes.image} src={Image4} alt="image4" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default MiddleBody

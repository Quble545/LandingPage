import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#434741',
    padding: 40,
    color: '#ffffff',
  },

  bottomContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },

  textHeader: {
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#69b3b8',
    color: '#FFFFFF',
  },

  video: {
    height: 240,
    width: 320,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <video className={classes.video} preload="auto" controls>
              <source src="../Videos/TravelVideo.webm" type="video/webm" />
            </video>
          </Grid>

          <Grid item>
            <Container maxWidth="sm">
              <Typography className={classes.textHeader} variant="h5">
                What are you waiting for?
              </Typography>
              <Typography
                className={classes.textHeader}
                variant="h5"
                gutterBottom
              >
                Travel Today.
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {' '}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                commonly used to demonstrate the visual form of a document
              </Typography>

              <Button variant="contained" className={classes.button}>
                Watch Video
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.bottomContainer}>

      </Container>
    </>
  )
}

export default Footer

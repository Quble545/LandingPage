import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import Image1 from '../Images/anemone-6288318.jpg'
import Image2 from '../Images/praha-5818649.jpg'
import Image3 from '../Images/racket-6308994.jpg'
import Image4 from '../Images/travel-6268605_1920.jpg'
import {
  WbSunny,
  Place,
  SportsTennis,
  FlightTakeoff,
  Settings,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 30,
  },

  headerText: {
    fontWeight: 'bold',
  },

  headerText2: {
    fontWeight: 'bold',
    color: '#69b3b8',
  },

  img: {
    height: 200,
    width: 200,
    backgroundColor: '#434343',
    color: '#FFFFFF',
    borderRadius: '50%',
    marginTop: 40,
    marginBottom: 20,
    position: 'relative',
  },

  icon: {
    backgroundColor: '#69b3b8',
    color: '#FFFFFF',
    border: 'solid 10px #69b3b8',
    borderRadius: '100%',
  },
}))

const LowerBody = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Grid container>
          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Container maxWidth="sm">
              <Typography align="center" gutterBottom>
                <img className={classes.img} src={Image1} alt="image1" />
                <WbSunny className={classes.icon} />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Enviroment
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Typography>
            </Container>
          </Grid>

          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Container maxWidth="sm">
              <Typography align="center" gutterBottom>
                <img className={classes.img} src={Image2} alt="image1" />
                <Place className={classes.icon} />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                City tour
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Typography>
            </Container>
          </Grid>

          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Container maxWidth="sm">
              <Typography align="center" gutterBottom>
                <img className={classes.img} src={Image3} alt="image1" />
                <SportsTennis className={classes.icon} />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Tennis Champion
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Typography>
            </Container>
          </Grid>

          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Container maxWidth="sm">
              <Typography align="center" gutterBottom>
                <img className={classes.img} src={Image4} alt="image1" />
                <FlightTakeoff className={classes.icon} />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Travel and Tourism
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                paragraph
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default LowerBody

import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import { Language, Adjust, WhatsApp, Settings } from '@material-ui/icons'

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

  icon1: {
    height: 75,
    width: 75,
    backgroundColor: '#434343',
    color: '#FFFFFF',
    border: 'solid 10px #434343',
    borderRadius: '50%',
    marginTop: 40,
    marginBottom: 30,
  },

  icon2: {
    height: 75,
    width: 75,
    backgroundColor: '#69b3b8',
    color: '#FFFFFF',
    border: 'solid 10px #69b3b8',
    borderRadius: '100%',
    marginTop: 40,
    marginBottom: 30,
  },
}))

const Body = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <Grid container>
          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Container maxWidth="sm">
              <Typography align="center" gutterBottom>
                <Language className={classes.icon1} fontSize="small" />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Global Network
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
                <Adjust className={classes.icon2} fontSize="small" />
              </Typography>

              <Typography
                className={classes.headerText2}
                variant="h5"
                align="center"
                gutterBottom
              >
                Vision
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
                <WhatsApp className={classes.icon1} fontSize="small" />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Chat
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
                <Settings className={classes.icon1} fontSize="small" />
              </Typography>

              <Typography
                className={classes.headerText}
                variant="h5"
                align="center"
                gutterBottom
              >
                Connect
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

export default Body

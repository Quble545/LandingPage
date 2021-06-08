import { Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  Topheader: {
    backgroundColor: '#709083',
    padding: 20,
  },

  header: {
    backgroundColor: '#434741',
    padding: 20,
    color: '#FFFFFF',
  },

  headerText: {
    fontWeight: 'bold',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="xl" className={classes.Topheader}>
        {''}
      </Container>

      <Container maxWidth="xl" className={classes.header}>
        <Typography className={classes.headerText} variant="h4" align="center">
          Create Your Own Genuine Web Masterplace
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          We are building awesome landing page for material ui
        </Typography>
      </Container>
    </>
  )
}

export default Header

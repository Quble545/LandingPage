import Header from './Header'
import UpperBody from './UpperBody'
import MidleBody from './MidleBody'
import { Container, makeStyles } from '@material-ui/core'
import LowerBody from './LowerBody'
import Footer from './Footer'

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#e2dbd4',
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <main className={classes.body}>
      <Container maxWidth="xl">
        <Header />
        <UpperBody />
        <MidleBody />
        <LowerBody />
        <Footer />
      </Container>
    </main>
  )
}

export default LandingPage

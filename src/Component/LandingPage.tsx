import Header from "./Header"
import Body from "./Body";
import {Container, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    body: {
        backgroundColor:"#e2dbd4"
    }
}))

const LandingPage = () => {
    const classes = useStyles();

    return (
    <main className={classes.body}>
        <Container maxWidth="xl">
            <Header />
            <Body />
        </Container>
    </main>
    );
}
 
export default LandingPage;
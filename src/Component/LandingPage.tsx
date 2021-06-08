import Header from "./Header"
import UpperBody from "./UpperBody";
import MidleBody from "./MidleBody"
import {Container, makeStyles} from "@material-ui/core"
import MiddleBody from "./MidleBody";

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
            <UpperBody />
            <MiddleBody />
        </Container>
    </main>
    );
}
 
export default LandingPage;
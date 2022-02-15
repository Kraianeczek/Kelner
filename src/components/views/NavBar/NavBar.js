import { Container, Navbar } from "react-bootstrap";
import styles from './NavBar.module.scss'

const NavBar = () => {
    return(
        <div>
            <Navbar bg="primary">
                <Container>
                    <h5 className={styles.h5}>Waiter.app</h5>
                    <h6 className={styles.h6}>Home</h6>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
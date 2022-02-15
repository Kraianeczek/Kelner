import styles from './footer.module.scss'

const Footer = () => {
    return(
        <div className={styles.container}>
            <p>Copyright <span className={styles.c}>c</span> PizzeriaApp 2022 </p>
        </div>
    )
}

export default Footer;
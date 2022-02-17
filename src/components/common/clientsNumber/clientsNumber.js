import styles from './clientsNumber.module.scss'

const ClientsNumber = props => {
    return (
        <input className={styles.input} type="number" min="0" max="10" value={props.children}></input>
    )
}

export default ClientsNumber;
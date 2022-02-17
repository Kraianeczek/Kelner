import styles from './status.module.scss'

const Status = props => {

    return(
        <select className={styles.select}>
            <option>{props.children}</option>     
        </select>
    )
}

export default Status;

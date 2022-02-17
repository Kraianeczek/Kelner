import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from './table.module.scss';

const Table = () => {

    const tables = useSelector(state => state.tables)
    console.log('tabls', tables);

    const handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <div>
            Stoliki
            {tables.map(table =>
                <div className={styles.container}>
                    <span >
                        <h3 className={styles.inline}>Table {table.id}</h3>
                        <p className={styles.inline}><span className={styles.status}>Status: </span>{table.status} </p>
                    </span>
                    <Button onClick={handleSubmit}><NavLink className={styles.link} to={`/tables/${table.id}`}>Show more</NavLink></Button>
                </div>)}
        </div>
    )
}

export default Table;
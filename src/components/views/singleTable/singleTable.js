import { Button } from "react-bootstrap";
import BillNumber from "../../common/billNumber/billNumber";
import ClientsNumber from "../../common/clientsNumber/clientsNumber";
import Status from "../../common/status/status";
import styles from './singleTable.module.scss'
import { useSelector } from "react-redux";

const SingleTable = () => {
    
    const tables = useSelector (state => state.tables)
    console.log('tabls', tables);

    return (
        <div>
            {tables.filter(table => table.id === 4).map(table => 
                <div>
                    <h1>Table {table.id}</h1>
                    <h5 className={styles.subtitle}>Status: <Status> {table.status}</Status></h5>
                    <h5 className={styles.subtitle}>People: <ClientsNumber>{table.peopleAmount}</ClientsNumber> / <ClientsNumber>{table.maxPeopleAmount}</ClientsNumber> </h5>
                    <h5 className={styles.subtitle}>Bill: <BillNumber>{table.bill}</BillNumber></h5>
                    <Button>Update</Button>
                </div>      
            )}
        </div>
    )
}

export default SingleTable;
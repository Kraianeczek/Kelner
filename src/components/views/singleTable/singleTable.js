import { Button } from "react-bootstrap";
import BillNumber from "../../common/billNumber/billNumber";
import Clients from "../../common/clients/clients";
import Status from "../../common/status/status";
import styles from './singleTable.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useState } from "react";
import { updateTables } from "../../../redux/tablesRedux";
import { NavLink } from "react-router-dom";
import MaxClients from "../../common/maxClients/maxClients";

const SingleTable = () => {
    
    const tables = useSelector (state => state.tables)
    const { id } = useParams();
    const wynik = tables.filter(table => table.id === id).length >0;
    if (!wynik) {
    }

    const dispatch = useDispatch();
    const [status, setStatus] = useState('');
    const [bill, setBill] = useState('');
    const [clients, setClients] = useState('');
    const [maxClients, setMaxClients] = useState('');
    
    const handleSubmit = (table) => {
        // if (bill === '') { setBill(table.bill)};
        const noweDane = { 
            id,
            bill: bill || table.bill,
            status: status || table.status,
            clients: clients || table.peopleAmount,
            maxClients: maxClients || table.maxPeopleAmount
        }
        dispatch(updateTables( noweDane ))
        console.log('button');
    }

    return (
        <div>
            {tables.filter(table => table.id === id).map(table => 
                <div>
                    <h1>Table {table.id}</h1>
                    <h5 className={styles.subtitle}>Status: <Status value={status || table.status} 
                        onChange={e => {
                            setStatus(e.target.value);
                            (e.target.value === "Busy") ? table.bill = 0 : table.bill ='';
                            (e.target.value === "Cleaning" || e.target.value === "Free") ? table.peopleAmount = 0 : table.peopleAmount = table.clients;
                        }}>{table.status}</Status></h5>
                    <h5 className={styles.subtitle}>People: <Clients value={clients || table.peopleAmount} 
                        onChange={e => {
                            setClients(e.target.value);
                            if (e.target.value > table.maxPeopleAmount) { table.maxPeopleAmount = e.target.value };
                            if (e.target.value > maxClients.target.value) { table.maxPeopleAmount = e.target.value}
                        }} /> / <MaxClients value={maxClients || table.maxPeopleAmount} 
                        onChange={e => {
                            setMaxClients(e.target.value); 
                            if (e.target.value < table.peopleAmount) { table.peopleAmount = e.target.value };
                            if (e.target.value < clients.target.value) { table.peopleAmount = e.target.value}
                            }} /></h5>
                    <h5 className={styles.subtitle}>Bill: <BillNumber value={bill || table.bill} onChange={e => setBill(e.target.value)} ></BillNumber></h5>
                    <Button onClick={() => handleSubmit(table)}><NavLink className={styles.navLink} to="/"> Update</NavLink></Button>
                </div>      
            )}
        </div>
    )
}

export default SingleTable;
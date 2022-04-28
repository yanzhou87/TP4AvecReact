import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Admins from "./components/Admins";
import Header from "./components/Header";
import Clients from "./components/Clients";

function App() {
    const [changeTypeUser, setChangeTypeUser] = useState(
        {
            showAdmins :false,
            showClient :false
        }
    )
    const [admins, setAdmins] = useState([

        {
            id: 1,
            firstName: "admin 1",
            lastName: "ad",
            age: 20,
            address: ''
        },
        {
            id: 2,
            firstName: "admin 2",
            lastName: "ad",
            age: 30,
            address: ''
        }
    ])

    const [clients, setClients] = useState([

        {
            id: 1,
            firstName: "client 1",
            lastName: "ccccc",
            age: 40,
            address: ''
        },
        {
            id: 2,
            firstName: "client 2",
            lastName: "ccccc",
            age: 60,
            address: ''
        }
    ])
    const changeTypeUserForAdmin =()=>{
        setChangeTypeUser({showAdmins:true, showClient: false});
    }
    const changeTypeUserForClient =()=>{
        setChangeTypeUser({showAdmins:false, showClient: true});
    }
    const exit =()=>{
        setChangeTypeUser({showAdmins:false, showClient: false});
    }
    return (
        <div className="container">
            <Header title={'Library'} changeTypeUserForAdmin={changeTypeUserForAdmin} exit={exit} changeTypeUserForClient={changeTypeUserForClient}/>
            {changeTypeUser.showAdmins && <Admins admins={admins}/>}
            {changeTypeUser.showClient && <Clients clients={clients}/>}
        </div>
    );
}

export default App;

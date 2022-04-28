import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
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
    const [admins, setAdmins] = useState([])

    const [clients, setClients] = useState([])
    useEffect(() => {
        const getAdmins = async () => {
            const dminsFromServer = await fetchAdmins()
            setAdmins(dminsFromServer)
        }
        const getClients = async () => {
            const clientsFromServer = await fetchClients()
            setClients(clientsFromServer)
        }
        getAdmins()
        getClients()
    }, [])

    const fetchAdmins = async () => {
        const res = await fetch('http://localhost:5000/admins')
        const data = await res.json()
        return data
    }

    const fetchAdmin = async(id) => {
        const res = await fetch(`http://localhost:5000/admins/${id}`)
        const data = await res.json()
        return data
    }

    const fetchClients = async () => {
        const res = await fetch('http://localhost:5000/clients')
        const data = await res.json()
        return data
    }

    const fetchClient= async(id) => {
        const res = await fetch(`http://localhost:5000/clients/${id}`)
        const data = await res.json()
        return data
    }
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

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Admins from "./components/Admins";
import Header from "./components/Header";
import Clients from "./components/Clients";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddAdmin from "./components/AddAdmin";
import PageForAdmin from "./components/PageForAdmin";
import AddClient from "./components/AddClient";
import PageForClient from "./components/PageForClient";


function App() {
    const [changeTypeUser, setChangeTypeUser] = useState(
        {
            showAdmins: false,
            showClient: false
        }
    )
   
    const [admins, setAdmins] = useState([])
    const [clients, setClients] = useState([])
    const [admin, setAdmin] = useState({})
    const [client, setClient] = useState({})
    const [emprunts, setEmprunts] = useState([])
    const [emprunt, setEmprunt] = useState({})

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

    const fetchAdmin = async (id) => {
        const res = await fetch(`http://localhost:5000/admins/${id}`)
        const data = await res.json()
        return data
    }

    const fetchClients = async () => {
        const res = await fetch('http://localhost:5000/clients')
        const data = await res.json()
        return data
    }

    const fetchClient = async (id) => {
        const res = await fetch(`http://localhost:5000/clients/${id}`)
        const data = await res.json()
        return data
    }
    const changeTypeUserForAdmin = () => {
        setChangeTypeUser({showAdmins: true, showClient: false});
    }
    const changeTypeUserForClient = () => {
        setChangeTypeUser({showAdmins: false, showClient: true});
    }
    const exit = () => {
        setChangeTypeUser({showAdmins: false, showClient: false});
    }
    const selectAdmin = async (id)=>{
        const admin = await fetchAdmin(id)
       setAdmin({id:admin.id, firstName : admin.firstName,lastName:admin.lastName, age:admin.age, address :admin.address })
    }
    const selectClient = async (id)=>{
        const client = await fetchAdmin(id)
        setClient({id:client.id, firstName : client.firstName,lastName:client.lastName, age:client.age, address :client.address })
    }
    const addAdmin = async (admin) => {
        const res = await fetch('http://localhost:5000/admins',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(admin)
            })
        const data = await res.json()
        setAdmins([...admins, data])
    }
    const addClient= async (client) => {
        const res = await fetch('http://localhost:5000/clients',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(client)
            })
        const data = await res.json()
        setClients([...clients, data])
    }
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Header title={'Library'}/>}/>
                    <Route path='/admins' element={<Admins admins={admins} selectAdmin={selectAdmin}/>}/>
                    <Route path='/clients' element={ <Clients clients={clients}  selectClient={selectClient}/>}/>
                    <Route path='/addAdmin' element={ <AddAdmin onAdd={addAdmin} />}/>
                    <Route path='/pageForAdmin' element={ <PageForAdmin admin={admin}/>}/>
                    <Route path='/addClient' element={ <AddClient onAdd={addClient}/>}/>
                    <Route path='/pageForClient' element={<PageForClient client={client}/> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

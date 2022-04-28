import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Admins from "./components/Admins";
import Header from "./components/Header";
import Clients from "./components/Clients";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddAdmin from "./components/AddAdmin";
import AdminPage from "./components/AdminPage";
import AddClient from "./components/AddClient";


function App() {
    const [changeTypeUser, setChangeTypeUser] = useState(
        {
            showAdmins: false,
            showClient: false
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
    const addClient= async (admin) => {
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
                    <Route path='/' element={<Header title={'Library'} changeTypeUserForAdmin={changeTypeUserForAdmin}
                                                     exit={exit}
                                                     changeTypeUserForClient={changeTypeUserForClient}/>}/>
                    <Route path='/admins' element={<Admins admins={admins}/>}/>
                    <Route path='/clients' element={ <Clients clients={clients}/>}/>
                    <Route path='/addAdmin' element={ <AddAdmin onAdd={addAdmin} />}/>
                    <Route path='/adminPage' element={ <AdminPage />}/>
                    <Route path='/addClient' element={ <AddClient onAdd={addClient}/>}/>
                </Routes>
            </div>
        </Router>


    );
}

export default App;

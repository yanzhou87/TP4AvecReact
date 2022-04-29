import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Admins from "./components/Admins";
import Header from "./components/Header";
import Clients from "./components/Clients";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddAdmin from "./components/AddAdmin";
import AddClient from "./components/AddClient";
import ClientsInfosForAdmins from "./components/ClientsInfosForAdmins";
import Books from "./components/Books";
import Admin from "./components/Admin";
import Client from "./components/Client";
import Cds from "./components/Cds";
import Dvds from "./components/Dvds";
import AddArticle from "./components/AddArticle";


function App() {
   
    const [admins, setAdmins] = useState([])
    const [clients, setClients] = useState([])
    const [admin, setAdmin] = useState({})
    const [client, setClient] = useState({})
    const [books, setBooks] = useState([])
    const [book, setBook] = useState({})
    const [cds,setCds] = useState([])
    const [cd, setCd] = useState({})
    const [dvds, setDvds] = useState([])
    const [dvd, setDvd] = useState({})
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
        const getBooks = async () => {
          const booksFromServer = await fetchBooks()
            setBooks(booksFromServer)
        }
        const getCds = async () =>{
            const cdsFromServer = await fetchCds()
            setCds(cdsFromServer)
        }
        const getDvds = async () =>{
            const dvdsFromServer = await fetchDvds()
            setDvds(dvdsFromServer)
        }
        getAdmins()
        getClients()
        getBooks()
        getCds()
        getDvds()
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

    const fetchBooks = async () =>{
        const res = await fetch('http://localhost:5000/books')
        const data = await res.json()
        return data
    }

    const fetchBook = async (id) =>{
        const res = await fetch(`http://localhost:5000/book/${id}`)
        const data = await res.json()
        return data
    }
    const fetchCds = async () =>{
        const res = await fetch('http://localhost:5000/cds')
        const data = await res.json()
        return data
    }

    const fetchCd = async (id) =>{
        const res = await fetch(`http://localhost:5000/cd/${id}`)
        const data = await res.json()
        return data
    }

    const fetchDvds = async () =>{
        const res = await fetch('http://localhost:5000/dvds')
        const data = await res.json()
        return data
    }

    const fetchDvd = async (id) =>{
        const res = await fetch(`http://localhost:5000/dvd/${id}`)
        const data = await res.json()
        return data
    }

    const selectAdmin = async (id)=>{
        const admin = await fetchAdmin(id)
       setAdmin({id:admin.id, firstName : admin.firstName,lastName:admin.lastName, age:admin.age, address :admin.address })
    }
    const selectClient = async (id)=>{
        const client = await fetchClient(id)
        setClient({id:client.id, firstName : client.firstName,lastName:client.lastName, age:client.age, address :client.address })
    }
    const selectBook = async (id) => {
      const book = await fetchBook(id)
        setBook(book)
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
    const onAddBook= async (book) => {
        const res = await fetch('http://localhost:5000/books',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(book)
            })
        const data = await res.json()
        setBooks([...books, data])
    }
    const onAddCd= async (cd) => {
        const res = await fetch('http://localhost:5000/cds',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(cd)
            })
        const data = await res.json()
        setCds([...cds, data])
    }
    const onAddDvd= async (dvd) => {
            const res = await fetch('http://localhost:5000/dvds',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(dvd)
                })
            const data = await res.json()
            setDvds([...dvds, data])
        }

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Header title={'Library'}/>}/>
                    <Route path='/admins' element={<Admins admins={admins} selectAdmin={selectAdmin}/>}/>
                    <Route path='/clients' element={ <Clients clients={clients}  selectClient={selectClient}/>}/>
                    <Route path='/addAdmin' element={ <AddAdmin onAdd={addAdmin} />}/>
                    <Route path='/admin' element={ <Admin admin={admin}/>}/>
                    <Route path='/addClient' element={<AddClient onAdd={addClient}/>}/>
                    <Route path='/client' element={<Client client={client}/>}/>
                    <Route path='/clientsInfosForAdmins' element={<ClientsInfosForAdmins clients={clients}/>}/>
                    <Route path='/books' element={<Books books={books} selectBook={selectBook}/>}/>
                    <Route path='/cds' element={<Cds cds={cds}/>}/>
                    <Route path='/dvds' element={<Dvds dvds={dvds}/>}/>
                    <Route path='/addArticle' element={<AddArticle onAddBook={onAddBook} onAddCd={onAddCd} onAddDvd={onAddDvd}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

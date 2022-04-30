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
import Book from "./components/Book";
import Emprunts from "./components/Emprunts";
import EmpruntsForClient from "./components/EmpruntsForClient";


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
    const [empruntsForClient, setEmpruntsForClient] = useState([])
    const [emprunt, setEmprunt] = useState({})
    const [id, setId] = useState({})
    const [exemplaires, setExemplaires] = useState([])

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
        const getEmprunts = async () => {
            const empruntsFromServer = await fetchEmprunts();
            setEmprunts(empruntsFromServer)
        }
        const getExemplaires = async () => {
            const exemplairesFromServer = await fetchExemplaires();
            setExemplaires(exemplairesFromServer)
        }
        getAdmins()
        getClients()
        getBooks()
        getCds()
        getDvds()
        getEmprunts()
        getExemplaires()
    }, [])

    const fetchAdmins = async () => {
        const res = await fetch('http://localhost:8080/admins')
        const data = await res.json()
        return data
    }

    const fetchAdmin = async (id) => {
        const res = await fetch(`http://localhost:8080/admins/${id}`)
        const data = await res.json()

        return data
    }

    const fetchClients = async () => {
        const res = await fetch('http://localhost:8080/clients')
        const data = await res.json()
        return data
    }

    const fetchClient = async (id) => {
        const res = await fetch(`http://localhost:8080/clients/${id}`)
        const data = await res.json()
        return data
    }

    const fetchBooks = async () =>{
        const res = await fetch('http://localhost:8080/books')
        const data = await res.json()
        return data
    }

    const fetchBook = async (id) =>{
        const res = await fetch(`http://localhost:8080/books/${id}`)
        const data = await res.json()
        return data
    }
    const fetchCds = async () =>{
        const res = await fetch('http://localhost:8080/cds')
        const data = await res.json()
        return data
    }

    const fetchCd = async (id) =>{
        const res = await fetch(`http://localhost:8080/cds/${id}`)
        const data = await res.json()
        return data
    }

    const fetchDvds = async () =>{
        const res = await fetch('http://localhost:8080/dvds')
        const data = await res.json()
        return data
    }

    const fetchDvd = async (id) =>{
        const res = await fetch(`http://localhost:8080/dvds/${id}`)
        const data = await res.json()
        return data
    }

    const fetchEmprunts = async () => {
        const res = await fetch('http://localhost:8080/emprunts')
        const data = await res.json()
        return data
    }

    const fetchEmprunt = async (id) => {
        const res = await fetch(`http://localhost:8080/emprunts/${id}`)
        const data = await res.json()
        return data
    }

    const fetchExemplaires = async () => {
        const res = await fetch('http://localhost:8080/exemplaires')
        const data = await res.json()
        return data
    }

    const fetchExemplaire = async (id) => {
        const res = await fetch(`http://localhost:8080/exemplaires/${id}`)
        const data = await res.json()
        return data
    }
    const selectAdmin = async (id)=>{
        const admin = await fetchAdmin(id)
        console.log(admin)
       setAdmin({id:admin.id, firstName : admin.firstName,lastName:admin.lastName, age:admin.age, address :admin.address })
        setId(admin.id)
    }

    const selectClient = async (id)=>{
        const client = await fetchClient(id)
        const emprunts = await fetchEmprunts()
        setEmpruntsForClient([])
        setClient(client)
        setId(client.id)
        if(emprunts.length!==0){
            emprunts.forEach((emp)=>{
                if(emp.client.id === client.id){
                    setEmpruntsForClient([...empruntsForClient, emp])
                }
            })
        }
    }

    const selectBook = async (id) => {
      const book = await fetchBook(id)
        setBook(book)
    }

    const addAdmin = async (admin) => {

        const res = await fetch('http://localhost:8080/admins',
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
        const res = await fetch('http://localhost:8080/clients',
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
        const res = await fetch('http://localhost:8080/books',
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
        const res = await fetch('http://localhost:8080/cds',
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
            const res = await fetch('http://localhost:8080/dvds',
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
                    <Route path='/admins/:id' element={ <Admin admin={admin}/>}/>
                    <Route path='/addClient' element={<AddClient onAdd={addClient}/>}/>
                    <Route path='/clients/:id' element={<Client empruntsForClient={empruntsForClient} client={client}/>}/>
                    <Route path='/clientsInfosForAdmins' element={<ClientsInfosForAdmins clients={clients} admin={admin} selectClient={selectClient}/>}/>
                    <Route path='/books' element={<Books books={books} selectBook={selectBook}/>}/>
                    <Route path='/cds' element={<Cds cds={cds}/>}/>
                    <Route path='/dvds' element={<Dvds dvds={dvds}/>}/>
                    <Route path='/addArticle' element={<AddArticle onAddBook={onAddBook} onAddCd={onAddCd} onAddDvd={onAddDvd}/>}/>
                    {/*<Route path='/book/:id' element={<Book book={book}/>}/>*/}
                    <Route path='/emprunts' element={<Emprunts emprunts={emprunts} admin={admin}/>}/>
                    <Route path='/emprunts/clientId:id' element={<EmpruntsForClient empruntsForClient={empruntsForClient} client={client}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

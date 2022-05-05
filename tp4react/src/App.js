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
import Emprunts from "./components/Emprunts";
import EmpruntsForClient from "./components/EmpruntsForClient";
import AddBook from "./components/AddBook";
import AddCdOrDvd from "./components/AddCdOrDvd";
import PageNotFind from "./components/PageNotFind";
import AddEmprunt from "./components/AddEmprunt";
import Articles from "./components/Articles";

function App() {

    const [admins, setAdmins] = useState([])
    const [clients, setClients] = useState([])
    const [admin, setAdmin] = useState({})
    const [client, setClient] = useState({})
    const [books, setBooks] = useState([])
    const [book, setBook] = useState({})
    const [cds, setCds] = useState([])
    const [cd, setCd] = useState({})
    const [dvds, setDvds] = useState([])
    const [dvd, setDvd] = useState({})
    const [emprunts, setEmprunts] = useState([])
    const [empruntsForClient, setEmpruntsForClient] = useState([])
    const [emprunt, setEmprunt] = useState({})
    const [id, setId] = useState({})
    const [articles, setArticles] = useState([])

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
        const getCds = async () => {
            const cdsFromServer = await fetchCds()
            setCds(cdsFromServer)
        }
        const getDvds = async () => {
            const dvdsFromServer = await fetchDvds()
            setDvds(dvdsFromServer)
        }
        const getEmprunts = async () => {
            const empruntsFromServer = await fetchEmprunts();
            setEmprunts(empruntsFromServer)
        }
        const getArticles = async () => {
            const articlesFromServer = await fetchArticles();
            setArticles(articlesFromServer)
        }
        getAdmins()
        getClients()
        getBooks()
        getCds()
        getDvds()
        getEmprunts()
        getArticles()
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

    const fetchBooks = async () => {
        const res = await fetch('http://localhost:8080/books')
        const data = await res.json()
        return data
    }

    const fetchBook = async (id) => {
        const res = await fetch(`http://localhost:8080/books/${id}`)
        const data = await res.json()
        return data
    }
    const fetchCds = async () => {
        const res = await fetch('http://localhost:8080/cds')
        const data = await res.json()
        return data
    }

    const fetchCd = async (id) => {
        const res = await fetch(`http://localhost:8080/cds/${id}`)
        const data = await res.json()
        return data
    }

    const fetchDvds = async () => {
        const res = await fetch('http://localhost:8080/dvds')
        const data = await res.json()
        return data
    }

    const fetchDvd = async (id) => {
        const res = await fetch(`http://localhost:8080/dvds/${id}`)
        const data = await res.json()
        return data
    }
    const fetchArticles = async () => {
        const res = await fetch('http://localhost:8080/articles')
        const data = await res.json()
        return data
    }

    const fetchArticle = async (id) => {
        const res = await fetch(`http://localhost:8080/articles/${id}`)
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
    const selectAdmin = async (id) => {
        const admin = await fetchAdmin(id)
        console.log(admin)
        setAdmin({
            id: admin.id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            age: admin.age,
            address: admin.address
        })
        setId(admin.id)
    }

    const selectClient = async (id) => {
        console.log(id)
        const client = await fetchClient(id)
        const emprunts = await fetchEmprunts()
        setEmpruntsForClient([])
        setClient(client)
        setId(client.id)
        if (emprunts.length !== 0) {
            emprunts.forEach((emp) => {
                if (emp.clientId === id) {
                    setEmpruntsForClient([...empruntsForClient, emp])
                }
            })
        }
    }

    const selectBook = async (id) => {
        const book = await fetchBook(id)
        setBook(book)
    }

    const selectCd = async (id) => {
        const cd = await fetchCd(id)
        setCd(cd)
    }


    const addAdmin = async (admin) => {
        console.log(admin)
        const res = await fetch('http://localhost:8080/admins',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(admin)
            })
        const data = await res.json();
        setAdmins([...admins, data])
    }

    const addClient = async (client) => {
        console.log(client)
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

    const onAddBook = async (book) => {
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

    const onAddCd = async (cd) => {
        console.log(cd)
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

    const onAddDvd = async (dvd) => {
        console.log(dvd)
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
    const addEmprunt = async (emprunt) => {
        const res = await fetch('http://localhost:8080/emprunts',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(emprunt)
            })
        const data = await res.json()
        setDvds([...emprunts, data])
    }
    const valideAddEmprunt = async (id, clientId) => {
         const myArticle = await fetchArticle(id)
        if (myArticle.id !== undefined && myArticle.nombreExemplaires !== 0) {
            await addEmprunt({clientId,id})
        }
    }
    const valideReturnEmprunt = async (myEmprunt) => {
        console.log(" dans la fonction valide return emprunt : " +myEmprunt.articleId)
        if (myEmprunt.id !== undefined) {
            const article = await fetchArticle(myEmprunt.articleId)

            if (article.id !== undefined) {
                await returnEmprunt(myEmprunt)
                article.nombreExemplaires += 1
            }
         }
    }
    const returnEmprunt = async (myEmprunt) => {
        console.log("return emprunt: " + myEmprunt.id)

            const res = await fetch(`http://localhost:8080/emprunts/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(myEmprunt)
                })
            const data = await res.json()
        setEmprunts(
            emprunts.map(
                (emprunt) => emprunt.id === myEmprunt.id ?
                    {...emprunt, returnEmprdunt: true} : emprunt
            )
        )
    }

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={<Header title={'Library'}/>}/>
                    <Route path='/admins' element={<Admins admins={admins} selectAdmin={selectAdmin}/>}/>
                    <Route path='/clients' element={<Clients clients={clients} selectClient={selectClient}/>}/>
                    <Route path='/addAdmin' element={<AddAdmin onAdd={addAdmin}/>}/>
                    <Route path='/admins/:id' element={<Admin admin={admin}/>}/>
                    <Route path='/addClient' element={<AddClient onAdd={addClient}/>}/>
                    <Route path='/clients/:id'
                           element={<Client empruntsForClient={empruntsForClient} client={client} valideReturnEmprunt={(valideReturnEmprunt)}/>}/>
                    <Route path='/clientsInfosForAdmins'
                           element={<ClientsInfosForAdmins clients={clients} admin={admin}
                                                           selectClient={selectClient}/>}/>
                    <Route path='/books' element={<Books books={books} selectBook={selectBook}/>}/>
                    <Route path='/cds' element={<Cds cds={cds}/>}/>
                    <Route path='/dvds' element={<Dvds dvds={dvds}/>}/>
                    <Route path='/addArticle' element={<AddArticle admin={admin}/>}/>
                    <Route path='/emprunts' element={<Emprunts emprunts={emprunts} admin={admin}/>}/>
                    <Route path='/clients/:id/emprunts'
                           element={<EmpruntsForClient empruntsForClient={empruntsForClient} client={client}/>}/>
                    <Route path='/addBook' element={<AddBook onAddBook={onAddBook} admin={admin}/>}/>
                    <Route path='/addCdOrDvd'
                           element={<AddCdOrDvd onAddCd={onAddCd} onAddDvd={onAddDvd} admin={admin}/>}/>
                    <Route path='*' element={<PageNotFind/>}/>
                    <Route path='/addEmprunt'
                           element={<AddEmprunt onAddEmprunt={valideAddEmprunt} client={client} books={books} cds={cds} dvds={dvds}/>}/>
                    <Route path='/articles' element={<Articles articles={articles}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

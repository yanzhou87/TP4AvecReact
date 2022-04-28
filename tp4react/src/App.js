import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Admin from "./components/Admin";
import Admins from "./components/Admins";

function App() {
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
    return (
        <div className="container">
            <Admins admins={admins}/>
        </div>
    );
}

export default App;

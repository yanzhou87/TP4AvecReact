import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Admin from "./components/Admin";
import Admins from "./components/Admins";
import Header from "./components/Header";

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
    const changeTypeUserForAdmin =()=>{
        setChangeTypeUser({showAdmins:true, showClient: false});
    }
    const exit =()=>{
        setChangeTypeUser({showAdmins:false, showClient: false});
    }
    return (
        <div className="container">
            <Header title={'Library'} changeTypeUser={changeTypeUser} changeTypeUserForAdmin={changeTypeUserForAdmin} exit={exit}/>
            {changeTypeUser.showAdmins && <Admins admins={admins}/>}
        </div>
    );
}

export default App;

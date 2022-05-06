
import {Link} from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {AiFillStar} from "react-icons/ai";

const ClientsInfosForAdmins =({clients,admin,selectClient})=>{
    const [show, setShow] = useState(false)
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Empruns</th>
                </tr>
                {clients.map((client) => (
                    <tr  key={client.id} onClick={()=>selectClient(client.id)}>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td><Button color={'pink'} text={'Show Infos'} /></td>
                        {/*<td><Link to={`/clients/${client.id}`}><span><AiFillStar/></span></Link></td>*/}
                    </tr>
                ))}
                </thead>
            </table>
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>
        </div>

    )
}
ClientsInfosForAdmins.propTypes = {
    selectClient:PropTypes.func
}
export default ClientsInfosForAdmins

import {Link} from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import {AiFillStar} from "react-icons/ai";

const ClientsInfosForAdmins =({clients,admin,selectClient})=>{
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
                        <td><Link to={`/emprunts/clientId:${client.id}`}><span><AiFillStar/></span></Link></td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>
        </div>

    )
}
ClientsInfosForAdmins.propTypes = {
   // clients:PropTypes.object,
    selectClient:PropTypes.func
}
export default ClientsInfosForAdmins
import Client from "./Client";
import {Link} from "react-router-dom";
import Button from "./Button";

const ClientsInfosForAdmins =({clients})=>{
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <tr  key={client.id}>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to='/pageForAdmin'><Button color={'pink'} text={'Mon page'}/></Link>
        </>

    )
}

export default ClientsInfosForAdmins
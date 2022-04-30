import {Link} from "react-router-dom";
import Button from "./Button";

const EmpruntsForClient = ({empruntsForClient, client}) => {

    return(
        <div className="pageCenter">
            <h2>Client name : {client.lastName}</h2>
            <table>
                <thead>
                <tr>
                    <th>Article</th>
                    <th>Date Emprunt</th>
                    <th>Date Return</th>
                    <th>Is Return</th>
                </tr>
                {empruntsForClient.map((emprunt) => (
                    <tr key={emprunt.id}>
                        <td>{emprunt.exemplaire.title}</td>
                        <td>{emprunt.date_emprunt}</td>
                        <td>{emprunt.date_return}</td>
                        <td>{emprunt.is_return}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to='/clientsInfosForAdmins'><Button color={'pink'} text={'Clients'}/></Link>
        </div>
    )
}
export default EmpruntsForClient
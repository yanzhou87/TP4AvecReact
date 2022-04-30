import {Link} from "react-router-dom";
import {FaHandPointRight, FaLaugh} from "react-icons/fa";
import Button from "./Button";
import PropTypes from "prop-types";

const Client = ({empruntsForClient,client}) => {
    return (
        <div className="pageCenter">
            <h2><span><FaHandPointRight/></span>{client.firstName} {client.lastName}</h2>
            <Link to='/addEmprunt'><Button color={'pink'} text={'Create Emprunt'}/></Link>
            <Link to='/'><Button color={'red'} text={'Exit'}/></Link>
            <h3>Emprunts</h3>
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
        </div>
    )
}

Client.propTypes = {
   // client:PropTypes.object,
}
export default Client

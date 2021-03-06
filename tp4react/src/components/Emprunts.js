
import Button from "./Button";
import {Link} from "react-router-dom";

const Emprunts = ({emprunts, admin}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Client Id</th>
                    <th>Article Id</th>
                    <th>Date Emprunt</th>
                    <th>Date Return Attendu</th>
                    <th>Date Return</th>
                </tr>
                {emprunts.map((emprunt) => (
                    <tr key={emprunt.id}>
                        <td>{emprunt.clientId}</td>
                        <td>{emprunt.articleId}</td>
                        <td>{emprunt.dateEmprunt}</td>
                        <td>{emprunt.dateReturnAttendu}</td>
                        <td>{emprunt.dateReturn}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>
        </div>
    )
}

Emprunts.propTypes = {
}
export default Emprunts
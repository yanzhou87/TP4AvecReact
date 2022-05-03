
import Button from "./Button";
import {Link} from "react-router-dom";

const Emprunts = ({emprunts, admin}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>lastName</th>
                    <th>firstName</th>
                    <th>Article</th>
                    <th>Date Emprunt</th>
                    <th>Date Return</th>
                    <th>Is Return</th>
                </tr>
                {emprunts.map((emprunt) => (
                    <tr key={emprunt.id}>
                        <td>{emprunt.client.lastName}</td>
                        <td>{emprunt.client.firstName}</td>
                        <td>{emprunt.article.title}</td>
                        <td>{emprunt.dateEmprunt}</td>
                        <td>{emprunt.dateReturn}</td>
                        <td>{emprunt.isReturn}</td>
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
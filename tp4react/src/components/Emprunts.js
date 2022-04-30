
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Emprunts = ({emprunts}) => {
    return (
        <>
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
                        <td>{emprunt.exemplaire.title}</td>
                        <td>{emprunt.date_emprunt}</td>
                        <td>{emprunt.date_return}</td>
                        <td>{emprunt.is_return}</td>

                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

Emprunts.propTypes = {
}
export default Emprunts
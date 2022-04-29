import Admin from "./Admin";
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Books = ({livres, selectLivre}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                {livres.map((livre) => (
                    <Livre key={livre.id}
                           livre={livre}
                           selectLivre={selectLivre}/>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

Admins.propTypes = {
    selectAdmin: PropTypes.func,
}
export default Admins


import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";

const Book = ({livre, selectLivre}) => {
    return (
        <tr className="livre" onClick={()=>selectLivre(livre.id)}>
            <td><Link to='/pageForLivre'><span><FaLaugh/></span></Link></td>
            <td>{livre.title}</td>
            <td>{livre.author}</td>
        </tr>
    )
}

export default Client

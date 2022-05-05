import {Link, Route} from "react-router-dom";
import {FaHandPointRight, FaLaugh} from "react-icons/fa";
import Button from "./Button";
import PropTypes from "prop-types";
import Header from "./Header";

const Client = ({empruntsForClient,client, valideReturnEmprunt}) => {

    if(client.firstName === undefined){
        return  <Header/>
    }
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
                    <th>Date Return Attendu</th>
                    <th>Date Return</th>
                    <th>Return</th>
                </tr>
                {empruntsForClient.map((emprunt) => (
                    <tr key={emprunt.id}>
                        <td>{emprunt.articleId}</td>
                        <td>{emprunt.dateEmprunt}</td>
                        <td>{emprunt.dateReturnAttendu}</td>
                        <td>{emprunt.dateReturn}</td>
                        <td><Button color={'Plum'} text={'Return'} onClick={()=>valideReturnEmprunt(emprunt)}/></td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )
}

Client.propTypes = {
   // client:PropTypes.object,
    valideReturnEmprunt : PropTypes.func
}
export default Client

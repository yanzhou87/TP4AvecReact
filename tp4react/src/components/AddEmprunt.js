import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {BsFillInboxesFill} from "react-icons/bs";

const AddEmprunt = ({onAddEmprunt, client, books, cds, dvds}) => {

    return (
        <div className="pageCenter">
            <h3>Books</h3>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Nombre Exemplaires</th>
                </tr>
                {books.map((book) => (
                    <tr key={book.id} >
                        <td onClick={() => {
                            onAddEmprunt(book.id)
                        }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td> {book.nombreExemplaires}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <h3>Cds</h3>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Nombre Exemplaires</th>
                </tr>
                {cds.map((cd) => (
                    <tr key={cd.id} >
                        <td onClick={() => {
                            onAddEmprunt(cd.id)
                        }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>
                        <td>{cd.title}</td>
                        <td>{cd.author}</td>
                        <td> {cd.nombreExemplaires}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <h3>Dvds</h3>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Nombre Exemplaires</th>
                </tr>
                {dvds.map((dvd) => (
                    <tr key={dvd.id} >
                        <td onClick={() => {
                            onAddEmprunt(dvd.id)
                        }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>
                        <td>{dvd.title}</td>
                        <td>{dvd.author}</td>
                        <td> {dvd.nombreExemplaires}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}
AddEmprunt.propTypes = {
    onAddEmprunt: PropTypes.func
}


export default AddEmprunt

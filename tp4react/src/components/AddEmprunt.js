import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {BsFillInboxesFill} from "react-icons/bs";

const AddEmprunt = ({onAddEmprunt, client,articles }) => {

    return (
        <div className="pageCenter">
            <h2>{client.firstName}</h2>
            <h3>Article</h3>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Nombre Exemplaires</th>
                </tr>
                {articles.map((article) => (
                    <tr key={article.id} >
                        <td onClick={() => {
                            onAddEmprunt(article.id , client.id)
                        }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>
                        <td>{article.title}</td>
                        <td>{article.author}</td>
                        <td> {article.nombreExemplaires}</td>
                    </tr>
                ))}
                </thead>
            </table>
            {/*<h3>Cds</h3>*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>Click</th>*/}
            {/*        <th>Title</th>*/}
            {/*        <th>Author</th>*/}
            {/*        <th>Nombre Exemplaires</th>*/}
            {/*    </tr>*/}
            {/*    {cds.map((cd) => (*/}
            {/*        <tr key={cd.id} >*/}
            {/*            <td onClick={() => {*/}
            {/*                onAddEmprunt(cd.id)*/}
            {/*            }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>*/}
            {/*            <td>{cd.title}</td>*/}
            {/*            <td>{cd.author}</td>*/}
            {/*            <td> {cd.nombreExemplaires}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </thead>*/}
            {/*</table>*/}
            {/*<h3>Dvds</h3>*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>Click</th>*/}
            {/*        <th>Title</th>*/}
            {/*        <th>Author</th>*/}
            {/*        <th>Nombre Exemplaires</th>*/}
            {/*    </tr>*/}
            {/*    {dvds.map((dvd) => (*/}
            {/*        <tr key={dvd.id} >*/}
            {/*            <td onClick={() => {*/}
            {/*                onAddEmprunt(dvd.id)*/}
            {/*            }}><span><BsFillInboxesFill/></span>   Emprunt ?</td>*/}
            {/*            <td>{dvd.title}</td>*/}
            {/*            <td>{dvd.author}</td>*/}
            {/*            <td> {dvd.nombreExemplaires}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </thead>*/}
            {/*</table>*/}
            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}
AddEmprunt.propTypes = {
    onAddEmprunt: PropTypes.func
}


export default AddEmprunt

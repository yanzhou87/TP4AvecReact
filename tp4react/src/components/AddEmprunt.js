import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddEmprunt = ({onAddEmprunt, client}) => {

    const [type, setType] = useState('')
    const [articleId, setArticleId] = useState('')
    const [clientId, setClientId] = useState(client.id)
    const [dateEmprunt, setDateEmprunt] = useState("")
    const [dateReturn, setDateReturn] = useState('')
    const [returnEmprdunt, setReturnEmprdunt] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!articleId || !type) {
            alert('Please add article id et type')
            return
        }
        if (type === "book") {
            onAddEmprunt("book",{clientId, articleId, dateEmprunt,dateReturn,returnEmprdunt})
        }else
        if (type === "cd") {
            onAddEmprunt("book",{clientId, articleId, dateEmprunt,dateReturn,returnEmprdunt})
        }else
        if (type === "dcd") {
            onAddEmprunt("book",{clientId, articleId, dateEmprunt,dateReturn,returnEmprdunt})
        }else{
            alert('all lowercase， type is between book, cd and dvd')
            return
        }

       setArticleId('')
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Type</label>
                <input type='text' placeholder='book or cd or dvd'
                       value={type}
                       onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Article Id</label>
                <input type='number' placeholder='1,2,3.....'
                       value={articleId}
                       onChange={(e) => setArticleId(e.target.value)}/>
            </div>

            <input type='submit' value='Save Emprunt' className='btn btn-block'/>
            <Link to={`/clients/${client.id}`}><Button color={'pink'} text={'My Page'}/></Link>
        </form>
    )
}
AddEmprunt.propTypes = {
    onAddEmprunt: PropTypes.func
}


export default AddEmprunt

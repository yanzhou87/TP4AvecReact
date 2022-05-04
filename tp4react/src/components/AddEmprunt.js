import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddEmprunt = ({onAddEmprunt, client}) => {


    const [articleId, setArticleId] = useState('')
    const [clientId, setClientId] = useState(client.id)
    const [dateEmprunt, setDateEmprunt] = useState("")
    const [dateReturn, setDateReturn] = useState('')
    const [returnEmprdunt, setReturnEmprdunt] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!articleId ) {
            alert('Please add article id')
            return
        }
        onAddEmprunt({clientId, articleId, dateEmprunt,dateReturn,returnEmprdunt})
       setArticleId('')
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
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
AddEmprunt.propTypes = {}


export default AddEmprunt

import {Link} from "react-router-dom";
import Button from "./Button";
import { useState} from "react";

const AddExemplaire = ({onAddExemplaireForBook, admin, selectBook}) => {
    const [type, setType] = useState('')
    const [idArticle, setIdArticle] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!idArticle || !type) {
            alert('Please add id article and type')
            return
        }

        if(type === 'book'){
            selectBook(idArticle)
            onAddExemplaireForBook()
        }

        setType('')
        setIdArticle(0)

    }
  return(
      <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <label>Article Type</label>
              <input type='type' placeholder='book or cd or dvd'
                     value={type}
                     onChange={(e) => setType(e.target.value)}/>
          </div>
          <div className='form-control'>
              <label>Article Id</label>
              <input type='number' placeholder='article id'
                     value={idArticle}
                     onChange={(e) => setIdArticle(e.target.value)}/>
          </div>

          <input type='submit' value='Save Exemplaire' className='btn btn-block'
          />
          <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'My Page'}/></Link>
      </form>
  )
}
export default AddExemplaire
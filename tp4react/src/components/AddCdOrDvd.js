import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddCdOrDvd = ({onAddCd, onAddDvd, admin}) => {
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [nombreExemplaires, setNombreExemplaires] = useState(0)
    const [durationMovie, setDurationMovie] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!type && !title) {
            alert('Please add type et title')
            return
        }

        if(type === 'cd'){
            onAddCd({title, author,nombreExemplaires,durationMovie})
        }
        if(type === 'dvd'){
            onAddDvd({title, author, nombreExemplaires, durationMovie})
        }

        setType('')
        setTitle('')
        setAuthor('')
        setNombreExemplaires(0)
        setDurationMovie(0)
    }

    return  (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Type</label>
                <input type='text' placeholder='cd or dvd'
                       value={type}
                       onChange={(e) => setType(e.target.value)}/>
            </div>
        <div className='form-control'>
            <label>Title</label>
            <input type='title' placeholder='Title'
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Author</label>
            <input type='text' placeholder='Author'
                   value={author}
                   onChange={(e) => setAuthor(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Nombre Exemplaires</label>
            <input type='number' placeholder='Roman or Manuel Scolaire or Etude or Magazine For Book'
                   value={nombreExemplaires}
                   onChange={(e) => setNombreExemplaires(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>DurationMovie</label>
            <input type='number' placeholder='Duration Movie For CD and DVD'
                   value={durationMovie}
                   onChange={(e) => setDurationMovie(e.target.value)}/>
        </div>

        <input type='submit' value='Save Article' className='btn btn-block'
        />
        <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'My Page'}/></Link>
    </form>
    )
}

AddCdOrDvd.propTypes = {
    onAddCd: PropTypes.func,
    onAddDvd: PropTypes.func
}

export default AddCdOrDvd

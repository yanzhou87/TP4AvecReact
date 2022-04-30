import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddArticle = ({onAddBook, onAddCd, onAddDvd}) => {
    const [arType, setType] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [yearPublication, setYearPublication] = useState('')
    const [articleType, setArticleType] = useState('')
    const [nombreExemplaires, setNombreExemplaires] = useState(0)
    const [editor, setEditor] = useState('')
    const [nombrePage, setNombrePage] = useState(0)
    const [durationMovie, setDurationMovie] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !arType) {
            alert('Please add title and type')
            return
        }
        if(arType === 'book'){
            onAddBook({title, author, yearPublication, articleType, nombreExemplaires, editor, nombrePage})
        }
        if(arType === 'cd'){
            onAddCd({title, author, yearPublication, articleType, nombreExemplaires,durationMovie})
        }
        if(arType === 'dvd'){
            onAddDvd({title, author, yearPublication, articleType, nombreExemplaires, durationMovie})
        }
        setType('')
        setTitle('')
        setAuthor('')
        setYearPublication('')
        setArticleType('')
        setNombreExemplaires(0)
        setEditor('')
        setNombrePage(0)
        setDurationMovie(0)
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Article Type</label>
                <input type='type' placeholder='book or cd or dvd'
                       value={arType}
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
                <label>Year Publication</label>
                <input type='text' placeholder='YYYY-MM-JJ'
                       value={yearPublication}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>ArticleType</label>
                <input type='text' placeholder='Roman or Manuel Scolaire or Etude or Magazine For Book'
                       value={articleType}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>NombreExemplaires</label>
                <input type='number' placeholder='Nombre Exemplaires'
                       value={nombreExemplaires}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Editor</label>
                <input type='text' placeholder='Editor'
                       value={editor}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Nombre Page</label>
                <input type='number' placeholder='Nombre Page For Book'
                       value={nombrePage}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>DurationMovie</label>
                <input type='number' placeholder='Duration Movie For CD and DVD'
                       value={durationMovie}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>

            <input type='submit' value='Save Article' className='btn btn-block'
            />
            <Link to='/Admin'><Button color={'red'} text={'Exit'}/></Link>
        </form>
    )
}

AddArticle.propTypes = {
    onAddBook: PropTypes.func,
    onAddCd: PropTypes.func,
    onAddDvd: PropTypes.func
}

export default AddArticle

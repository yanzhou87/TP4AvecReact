import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddBook = ({onAddBook,admin}) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [yearPublication, setYearPublication] = useState('')
    const [articleType, setArticleType] = useState('')
    const [nombreExemplaires, setNombreExemplaires] = useState(0)
    const [editor, setEditor] = useState('')
    const [nombrePage, setNombrePage] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title ) {
            alert('Please add title')
            return
        }
        onAddBook({title, author, yearPublication, articleType, nombreExemplaires, editor, nombrePage})
        setTitle('')
        setAuthor('')
        setYearPublication('')
        setArticleType('')
        setNombreExemplaires(0)
        setEditor('')
        setNombrePage(0)
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
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
                       onChange={(e) => setYearPublication(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>ArticleType</label>
                <input type='text' placeholder='Roman or Manuel Scolaire or Etude or Magazine For Book'
                       value={articleType}
                       onChange={(e) => setArticleType(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Editor</label>
                <input type='text' placeholder='Editor'
                       value={editor}
                       onChange={(e) => setEditor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Nombre Page</label>
                <input type='number' placeholder='Nombre Page For Book'
                       value={nombrePage}
                       onChange={(e) => setNombrePage(e.target.value)}/>
            </div>

            <input type='submit' value='Save Article' className='btn btn-block'
            />
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'My Page'}/></Link>
        </form>
    )
}

AddBook.propTypes = {
    onAddBook: PropTypes.func,
}

export default AddBook

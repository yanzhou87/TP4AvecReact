import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";

const AddArticle = ({onAddBook, onAddCd, onAddDvd}) => {
    const [articleType, setType] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !articleType) {
            alert('Please add title and type')
            return
        }
        if(articleType === 'book'){
            onAddBook({title, author})
        }
        if(articleType === 'cd'){
            onAddCd({title, author})
        }
        if(articleType === 'dvd'){
            onAddDvd({title, author})
        }
        setType('')
        setTitle('')
        setAuthor('')
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Article Type</label>
                <input type='type' placeholder='book or cd or dvd'
                       value={articleType}
                       onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>FirstName</label>
                <input type='title' placeholder='Title'
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>LastName</label>
                <input type='author' placeholder='Author'
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>

            <input type='submit' value='Save Article' className='btn btn-block'
            />
            <Link to='/Admin'><Button color={'red'} text={'Exit'}/></Link>
        </form>


    )
}

export default AddArticle

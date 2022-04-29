import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import {FaGithubAlt} from "react-icons/fa";

const AddAdmin = ({onAdd}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!firstName) {
            alert('Please add admin')
            return
        }

        onAdd({firstName, lastName})
        setFirstName('')
        setLastName('')
    }

    return (

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>FirstName</label>
                <input type='firstName' placeholder='AddAdmin'
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>LastName</label>
                <input type='lastName' placeholder='LastName'
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <input type='submit' value='Save Admin' className='btn btn-block'
                   onClick={() => window.location.href = '/'}/>
           <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </form>


    )
}

export default AddAdmin

import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AddAdmin from "./AddAdmin";

const AddClient = ({onAdd}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!firstName) {
            alert('Please add client')
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
                <input type='firstName' placeholder='AddClient'
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>LastName</label>
                <input type='lastName' placeholder='LastName'
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
            </div>

          <input type='submit' value='Save Client' className='btn btn-block'
                  />
    <Link to='/'><Button color={'red'} text={'Exit'}/></Link>
        </form>


    )
}
AddClient.propTypes = {
    onAdd: PropTypes.func,
}
export default AddClient

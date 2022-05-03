import {useState} from 'react'
import Button from "./Button";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddArticle = ({admin}) => {

    return  (
        <div className='pageCenter'>
            <h2>{admin.firstName}  {admin.lastName}</h2>
            <Link to='/addBook'><Button color={'Plum'} text={'Add Book'}/></Link>
            <Link to='/addCdOrDvd'><Button color={'SkyBlue'} text={'Add Cd or Dvd'}/></Link>
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>
        </div>

    )
}

AddArticle.propTypes = {}


export default AddArticle

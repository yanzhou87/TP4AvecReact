import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from "react-router-dom";

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div>
                <Link to='/admins'><Button color={'SkyBlue'} text={'Admins'}/></Link>
                <Link to='/clients'><Button color={'pink'} text={'Clients'}/></Link>
                <Link to='/books'><Button color={'PowderBlue'} text={'Books'} /></Link>
                <Link to='/cds'><Button color={'PowderBlue'} text={'Cds'} /></Link>
                <Link to='/dvds'><Button color={'PowderBlue'} text={'Dvds'} /></Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Library',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
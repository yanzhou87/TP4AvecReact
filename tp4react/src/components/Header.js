import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from "react-router-dom";

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div>
                <Link to='/admins'><Button color={'green'} text={'Admins'}/></Link>
                <Link to='/clients'><Button color={'pink'} text={'Client'}/></Link>
                <Link to='/addAdmin'><Button color={'SkyBlue'} text={'Add admin'} /></Link>
                <Link to='/articles'><Button color={'pink'} text={'Show Articles'}/></Link>
                <Link to='/books'><Button color={'Plum'} text={'Books'} /></Link>
                <Link to='/cds'><Button color={'DarkSeaGreen'} text={'Cds'} /></Link>
                <Link to='/dvds'><Button color={'LightSlateGray'} text={'Dvds'} /></Link>
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
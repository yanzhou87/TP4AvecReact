import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,  changeTypeUser, changeTypeUserForAdmin, exit}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>

            <Button color={'green'}
                    text={'Admins'} onClick={()=>changeTypeUserForAdmin()}/>
            <Button color={'red'}
                    text={'Exit'} onClick={()=>exit()} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Library',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    changeTypeUserForAdmin:PropTypes.func,
    exit : PropTypes.func
}

export default Header
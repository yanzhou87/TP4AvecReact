import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, changeTypeUserForAdmin, exit, changeTypeUserForClient}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <div>
            <Button color={'green'}
                    text={'Admins'} onClick={()=>changeTypeUserForAdmin()}/>
            <Button color={'pink'}
                    text={'Client'} onClick={()=>changeTypeUserForClient()}/>
            <Button color={'red'}
                    text={'Exit'} onClick={()=>exit()} />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Library',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    changeTypeUserForAdmin:PropTypes.func,
    changeTypeUserForClient:PropTypes.func,
    exit : PropTypes.func
}

export default Header
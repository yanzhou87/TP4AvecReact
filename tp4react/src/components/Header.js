import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, changeTypeUserForAdmin, exit, changeTypeUserForClient}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/*{location.pathname === '/' && (*/}
            <div>
                <Button color={'green'}
                        text={'Admins'} onClick={() => window.location.href = '/admins'}/>
                <Button color={'pink'}
                        text={'Client'} onClick={() => window.location.href = '/clients'}/>
                <Button color={'SkyBlue'}
                        text={'Add admin'} onClick={() => window.location.href = '/addAdmin'}/>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Library',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    changeTypeUserForAdmin: PropTypes.func,
    changeTypeUserForClient: PropTypes.func,
    exit: PropTypes.func
}

export default Header
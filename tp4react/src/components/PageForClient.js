import Button from "./Button";
import {FaHandPointRight} from 'react-icons/fa'

const PageForAdmin = ({client}) => {
    return (
        <div className="pageForClient">
            <h2>  <span> <FaHandPointRight/></span> client.firstName   client.lastName</h2>



                <Button color={'pink'}
                        text={'Add Emprunt'} onClick={() => window.location.href = '/addEmprunt'}/>
        </div>
)
}
export default PageForAdmin
import Button from "./Button";

const AdminPage =()=>{
    return(
        <div>
            <Button color={'pink'}
                    text={'Create Client'} onClick={() => window.location.href = '/addClient'}/>
        </div>
    )
}
export default AdminPage
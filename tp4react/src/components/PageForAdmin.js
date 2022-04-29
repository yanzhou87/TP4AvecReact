import Button from "./Button";

const PageForAdmin =()=>{
    return(
        <div>
            <Button color={'pink'}
                    text={'Create Client'} onClick={() => window.location.href = '/addClient'}/>
        </div>
    )
}
export default PageForAdmin
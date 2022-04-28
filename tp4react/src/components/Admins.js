import Admin from "./Admin";

const Admins = ({admins, onClickAdmin}) => {
    return (

        <>
            {admins.map((admin) => (
                <Admin key={admin.id}
                      admin={admin}
                      />
            ))}
        </>
    )
}

export default Admins

const Client = ({client}) => {
    return (
        <tr className="client" onClick={() => window.location.href = '/pageForClient'}>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
        </tr>
    )
}

export default Client

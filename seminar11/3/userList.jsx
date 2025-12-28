
import { useEffect, useState } from 'react'
import User from "./User"
import './UserList.css'

const SERVER = "http://localhost:8080"

function UserList() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch(`${SERVER}/users`)
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='user-list'>
            {
                users.map(e => <User key={e.id} item={e} />)
            }
        </div>
    )
}

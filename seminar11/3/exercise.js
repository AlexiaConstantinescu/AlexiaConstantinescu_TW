
import { useEffect, useState } from "react";
import "./UserList.css";

const SERVER = "http://localhost:8080";

function RegularUser({ user }) {
    return (
        <div className="user regular">
            <p><strong>{user.fullName}</strong></p>
            <p>Username: {user.username}</p>
            <p>Type: Regular User</p>
        </div>
    );
}

function PowerUser({ user }) {
    return (
        <div className="user power">
            <p><strong>{user.fullName}</strong></p>
            <p>Username: {user.username}</p>
            <p>Type: Power User</p>
        </div>
    );
}

function Exercise() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch(`${SERVER}/users`);
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="user-list">
            {
                users.map(user => {
                    if (user.type === "regular-user") {
                        return <RegularUser key={user.id} user={user} />;
                    }

                    if (user.type === "power-user") {
                        return <PowerUser key={user.id} user={user} />;
                    }

                    return null;
                })
            }
        </div>
    );
}

export default Exercise;

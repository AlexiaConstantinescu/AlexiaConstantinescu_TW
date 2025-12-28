
import { useEffect, useState } from "react";
import "./UserList.css";

const SERVER = "http://localhost:8080";

function UserDetails({ user, onClose }) {
    if (!user) return null;

    return (
        <div className="user-details">
            <h3>Detalii utilizator</h3>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Type:</strong> {user.type}</p>
            <button onClick={onClose}>Inchide</button>
        </div>
    );
}

function User({ user, onSelect }) {
    return (
        <div className="user" onClick={() => onSelect(user)}>
            <p>{user.fullName}</p>
            <p>Username: {user.username}</p>
        </div>
    );
}

function UserForm({ onAdd }) {
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [type, setType] = useState("regular-user");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ username, fullName, type });
        setUsername("");
        setFullName("");
        setType("regular-user");
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="regular-user">Regular User</option>
                <option value="power-user">Power User</option>
            </select>
            <button type="submit">Adauga utilizator</button>
        </form>
    );
}

function Exercise() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = async () => {
        const response = await fetch(`${SERVER}/users`);
        const data = await response.json();
        setUsers(data);
    };

    const addUser = async (user) => {
        await fetch(`${SERVER}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="user-list">
            {users.map((user) => (
                <User key={user.id} user={user} onSelect={setSelectedUser} />
            ))}

            <UserForm onAdd={addUser} />

            <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    );
}

export default Exercise;

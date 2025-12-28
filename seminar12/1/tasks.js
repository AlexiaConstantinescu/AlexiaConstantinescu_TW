
import { useNavigate } from "react-router"
import { useParams } from "react-router" //pentru id ca parametru in ruta

const Tasks = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    return (
        <>
            <p>Tasks</p>
            <button
                onClick={() => {
                    navigate("/home")
                }}>
                Go back home
            </button>
            <button
                onClick={() => {
                    navigate("/about")
                }}>
                Go to about
            </button>
            <p>Id: {id}</p>
        </>
    )
}

export default Tasks

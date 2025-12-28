import { useNavigate } from "react-router"

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>About</p>
            <button
                onClick={() => {
                    navigate("/home")
                }}>
                Go back home
            </button>
            <button
                onClick={() => {
                    navigate("/tasks")
                }}>
                Go to tasks
            </button>
        </>
    )
}

export default About

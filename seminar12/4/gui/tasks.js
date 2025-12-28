
import { useReducer } from "react"
import { useNavigate } from "react-router"

const initialState = { count: 0, history: [0] }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1,
                history: [...state.history, state.count + 1]
            }
        case 'decrement':
            return {
                count: state.count - 1,
                history: [...state.history, state.count - 1]
            }
        case 'reset':
            return {
                count: 0,
                history: [0]
            }
        default:
            throw Error();
    }
}

const Tasks = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()
    return (
        <>
            <p>Tasks: {state.count}, history: {state.history.join(", ")}</p>
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
            <button
                onClick={() => {
                    dispatch({ type: "increment" })
                }}>
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decrement" })
                }}>
                Decrement
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "reset" })
                }}>
                Reset
            </button>
        </>
    )
}

export default Tasks

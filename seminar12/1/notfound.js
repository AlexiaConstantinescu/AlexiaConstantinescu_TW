
import { Link } from "react-router"

const NotFound = () => {
    return (
        <>
            <p>Page Not Found</p>
            <Link to={'/home'}>Go to homepage</Link>
        </>
    )
}

export default NotFound

import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <h1 className="text-center">Error Page</h1>
            <Link className="text-center" to="/">Home</Link>
        </>
    )
}

export default ErrorPage 
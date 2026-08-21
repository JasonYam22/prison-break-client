import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div>
      <h2>Seems like you got lost</h2>

      <Link to={"/"}>Back to HomePage</Link>
    </div>
  )
}

export default NotFoundPage

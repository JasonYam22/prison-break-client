import { Link } from "react-router-dom"

function ErrorPage() {
  return (
  <div>
    <div>
      <h2 className="flex justify-center text-center text-4xl text-red-600 pt-5">There seems to be an error.</h2>
      </div>
        <div>
      <img className="flex justify-center mx-auto pt-10" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm90b3dsdDh6cWpwNzFsNGtxYWE0a3JmY2p5cThlcDhsYmlnZDR3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HUkOv6BNWc1HO/giphy.gif" alt="chaos" />
      

        <Link className="flex justify-center text-white-900 text-2xl border border-white bg-green-800 rounded-full mx-auto w-fit pl-4 pr-4 pt-1 pb-1 mb-6 mt-6 hover:bg-green-400" to={"/"} ><button>Back to HomePage</button></Link>
      </div>
      </div>
  )
}
export default ErrorPage

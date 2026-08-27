import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2 className="font-bold text-2xl p-4 text-red-500 flex justify-center text-center">
        Seems like you got lost
      </h2>
      <img
        className="flex justify-center mx-auto object-cover pb-10"
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazI0ajYwcHpwbXIwdmh6ZnpnNDIyMThxNHVuZ2xoaDZ4d3Jrcmc0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u7NBX4OnKEPfCAtuGw/giphy.gif"
        alt="lost"
      />
      <Link
        className="flex justify-center text-white-900 text-2xl border border-white bg-green-800 rounded-full mx-auto w-fit pl-4 pr-4 pt-0 pb-1 mb-6 hover:bg-green-400"
        to={"/"}
      >
        <button>Back to HomePage</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;

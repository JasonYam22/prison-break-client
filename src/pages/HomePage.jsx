import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="home-page">
      <div className="flex items-start gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6U2sIVmS4odBfzsIj8koZI7_CHbOw2_TwHlWcWfnJg&s=10"
          alt="Prison Break"
          className="w-40 rounded-lg object-cover"
        />
        <nav className="flex gap-1 border-2 border-white rounded-full px-1 py-1 self-start mt-2">
          <Link to="/characters" className="rounded-full px-5 py-2 hover:bg-gray-600 hover:scale-110 hover:text-[1.1rem] transition">Characters</Link>
          <Link to="/prisons" className="rounded-full px-5 py-2 hover:bg-gray-600 hover:scale-110 hover:text-[1.1rem] transition">Prisons</Link>
        </nav>
      </div>

      <div className="description-section max-w-2x1">
        <h1 className="text-2x1 font-bold mb-3">WHAT IS PRISON BREAK ABOUT?</h1>
        <p className="leading relaxed text-white">
          {" "}
          Prison Break follows Michael Scofield, a structural engineer who
          deliberately commits a robbery to get himself incarcerated at Fox
          River State Penitentiary. His true purpose is to break out his older
          brother Lincoln Burrows, who has been wrongfully convicted of
          murdering the Vice President's brother and sentenced to death. Having
          secretly memorized the prison's blueprints, tattooed as a coded map
          across his own body, Michael assembles an unlikely team of fellow
          inmates to pull off the impossible escape before Lincoln's execution
          date arrives. As the plan unfolds, the brothers uncover a much larger
          conspiracy involving a powerful shadow organization known as The
          Company, forcing them to stay one step ahead of both the guards inside
          and the agents hunting them once they're on the run.{" "}
        </p>
      </div>
    </div>
  );
}

export default HomePage;

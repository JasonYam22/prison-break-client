import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"

function HomePage() {

    return(
        <div className="home-page">
       <Navbar />

<div className="header-logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6U2sIVmS4odBfzsIj8koZI7_CHbOw2_TwHlWcWfnJg&s=10" alt="Prison Break" className="logo" />
</div>

<div className="header-links">
    <Link to="/characters">Characters</Link>
    <br />
        <Link to="/prisons">Prisons</Link>
</div>

       <div className="description-section">
     <h1>WHAT IS PRISON BREAK ABOUT?</h1>
       <p> Prison Break follows Michael Scofield, a structural engineer who deliberately commits a robbery to get himself incarcerated at Fox River State Penitentiary. His true purpose is to break out his older brother Lincoln Burrows, who has been wrongfully convicted of murdering the Vice President's brother and sentenced to death. Having secretly memorized the prison's blueprints, tattooed as a coded map across his own body, Michael assembles an unlikely team of fellow inmates to pull off the impossible escape before Lincoln's execution date arrives. As the plan unfolds, the brothers uncover a much larger conspiracy involving a powerful shadow organization known as The Company, forcing them to stay one step ahead of both the guards inside and the agents hunting them once they're on the run. </p>
       </div>
        </div>
    )
}

export default HomePage
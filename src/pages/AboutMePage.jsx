import jasonImage from "../assets/jason.png"

function AboutMePage() {
    return(
        <div className="flex flex-col text-center">
<section>
    <h2>Creator:</h2>
    <h3>Jason Yam</h3>
    <img className="w-70 h-90 object-container mx-auto block" src={jasonImage}/>
</section>
        </div>
    )
}

export default AboutMePage
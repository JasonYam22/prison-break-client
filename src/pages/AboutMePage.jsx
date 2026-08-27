import jasonImage from "../assets/jason.png"

function AboutMePage() {
    return(
      <div className="flex justify-center mt-20">

        <div className="flex flex-row text-start border border-white p-5 rounded-3xl gap-8 max-w-4xl">

        <ul className="text-gray-200 space-y-1 pl-5 text-2xl">
        <li>Name:  Jason Yam</li>
        <li>Born:  13.03.2004</li>
        <li>Age:  22</li>
        <li>Based:  Germany, Hamburg</li>
        <li className="pb-5">Past Job:  Electrician</li>
        <p className="mr-20">"I am currently specializing in web development, focusing on building clean, functional, and efficient digital solutions using modern technologies.Due to back conditions, I transitioned from physical work to a career in IT and web development. Although I have no prior coding experience, I am highly motivated and dedicated to learning this craft from the ground up.</p>
    </ul>
    <img className="w-80 h-110 object-container rounded-3xl" src={jasonImage}/>
        </div>
        </div>
    )
    
}

export default AboutMePage
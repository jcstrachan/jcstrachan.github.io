import Showreel from './home-page/showreel'
import './home.css'
import Gallery from './home-page/gallery'

export default function Home() {
    return (
        <>
            <Showreel/>
            <div className='about-section'>
                <h3>Hello!</h3>
                <p>My name is James and I am a 22-year-old Scotland-based Filmmaker and Software Developer. I have almost 5 years of experience working on a variety of projects from commercials to competitive short films. I am primarily an editor but am beginning to venture into cinematography and colouring. Feel free to contact me if you wish to collaborate!<br/><br/>Here's some stills of my work!</p>
            </div>
            <Gallery/>
        </>
    )
}
import './gallery.css'
import Carousel from 'react-bootstrap/Carousel';

// Import images
import sc1 from '../../assets/stills/sole_custody.jpg'
import sc2 from '../../assets/stills/sole-custody-2.jpg'

import stable from '../../assets/stills/stable.png'
import stable2 from '../../assets/stills/stable-2.png'

import pc from '../../assets/stills/prison-comedy.jpg'
import pc2 from '../../assets/stills/prison-comedy-2.jpg'

import lk from '../../assets/stills/Lurking_1.2.1.png'


export default function Gallery() {

    const images = [
        {title:'Sole Custody', role:'Director', image:sc1},
        {title:'Lurking', role:'Director of Photography', image:lk},
        {title:'Stable', role:'1st AC / Gaffer', image:stable2},
        {title:'Prison Comedy', role:'1st AC', image:pc2},
        {title:'Sole Custody', role:'Director', image:sc2},
        {title:'Stable', role:'1st AC / Gaffer', image:stable},
        {title:'Prison Comedy', role:'1st AC', image:pc},
    ]

    return (
        <div className='carousel-container'>
            <Carousel fade>
                {images.map((image)=>
                    <Carousel.Item interval={5000}>
                        <img className='carousel-image' src={image.image}/>
                        <Carousel.Caption>
                            <h3>{image.title}</h3>
                            <p>{image.role}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}
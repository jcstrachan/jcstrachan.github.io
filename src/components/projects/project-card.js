import './project-card.css'

export default function ProjectCard(props) {
    return (
        <div className='card-container' onClick={() => props.showFilm(props.film)}>
            <img className='card-image' src={props.film.backgroundImage} alt='A still from a short film'></img>
            <span className='card-date'>{props.film.date}</span>
            <span className='card-title'>{props.film.title}</span>
        </div>
    )
}
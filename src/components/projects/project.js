import './project.css'
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Project(props) {
    return (
        <div className='project-detail-container'>
            <div className='img-wrap'>
                <img className='bg-img' src={props.film.backgroundImage}/>
            </div>
            <span className='back-button' onClick={props.hideFilm}><FontAwesomeIcon icon={faArrowLeft} /> Go Back</span>
            <div className='project-content-container'>
                <span className='project-title'>{props.film.title}</span>
                <span className='project-role'>{props.film.role}</span>
                <div className='project-info-container'>
                    <div className='project-meta'>
                        {props.film.director && (
                            <span className='director-name'><b>Directed by: </b>{props.film.director}</span>
                        )}
                        {props.film.camera && (
                            <span className='camera-type'><b>Camera: </b>{props.film.camera}</span>
                        )}
                        {/* <span className='lens'><b>Lens: </b>{props.film.lens}</span> */}
                    </div>
                    <div className='project-description'>
                        <span>{props.film.film_desc}</span>
                    </div>
                </div>
            </div>
            <div className='project-videos-container'>
                {props.film.url && (
                        <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={props.film.url}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
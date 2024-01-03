import './work.css'
import ProjectCard from './projects/project-card'
import { FilmData } from '../data/film-data'
import { useState } from 'react';
import Project from './projects/project';

export default function Work() {

    const editorCredits = FilmData.filter(film => film.role === 'Editor');
    const editorDopCredits = FilmData.filter(film => film.role === 'Director of Photography / Editor');
    const fAcCredits = FilmData.filter(film => film.role === '1st AC');
    const directorCredits = FilmData.filter(film => film.role === 'Director');

    const [show, setShow] = useState(false);
    const [targetFilm, setTargetFilm] = useState()
    const showFilm = (film) => {
        setTargetFilm(film);
        setShow(true);
    }

    const hideFilm = () => {setShow(false)}

    const editorCards = editorCredits.map((film) => 
        <ProjectCard key={film.title} film={film} showFilm={showFilm}/>
    )

    const editorDopCards = editorDopCredits.map((film) => 
        <ProjectCard key={film.title} film={film} showFilm={showFilm}/>
    )

    const fAcCards = fAcCredits.map((film) => 
        <ProjectCard key={film.title} film={film} showFilm={showFilm}/>
    )

    const directorCards = directorCredits.map((film) => 
        <ProjectCard key={film.title} film={film} showFilm={showFilm}/>
    )

    return (
        <>
            {!show && (
                <div className='projects-container'>
                <span className='role-title'>Editor</span>
                <div className='cards-container'>
                    {editorCards}          
                </div>
                <span className='role-title'>Director of Photography / Editor</span>
                <div className='cards-container'>
                    {editorDopCards}          
                </div>
                <span className='role-title'>1st AC</span>
                <div className='cards-container'>
                    {fAcCards}
                </div>
                <span className='role-title'>Director</span>
                <div className='cards-container'>
                    {directorCards}          
                </div>
            </div>
            )}
            {show && (
                <Project film={targetFilm} hideFilm={hideFilm}/>
            )}
        </>
    )
}
import './showreel.css'
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Showreel() {

    const [loading, setLoading] = useState(true)
    const toggleLoad = () => {setLoading(!loading)}

    return (
        <div className='showreel-container'>
            {loading && (
                <div>
                    <h4>Video Loading...</h4>
                    <FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
                </div>
            )}
            <div className={loading ? 'player-wrapper hide-video' : 'player-wrapper'}>
                <ReactPlayer
                    className='react-player'
                    url="https://vimeo.com/898918813?share=copy"
                    width='100%'
                    height='100%'
                    controls={true}
                    onReady={toggleLoad}
                />
            </div>
        </div>
      );
}
import { useRef, useState } from 'react'
import song from './assets/song.mp3'

function Music() {

    const [musicPlay, setMusicPlay] = useState(true);

    const refAudio = useRef()

    const handlePlay = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }

    return (
        <div className="container">
            <audio 
            src={song}
            loop="loop"
            ref={refAudio}>
            </audio>

            <button onClick={handlePlay}>{musicPlay ? 'Play' : 'Pause'}</button>

        </div>
    )
}

export default Music
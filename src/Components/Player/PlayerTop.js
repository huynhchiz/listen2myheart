import './Player.scss'
import Progress from './Progress/Progress'
import { Context } from '../../Context/Context'
import { useContext } from 'react'

const PlayerTop = ({ className = '' }) => {
    const audioContext = useContext(Context)
    const currentSong = audioContext.findCurrentSong()

    return (
        <div className={`player-top ${className}`}>
            <div className='player-top-container'>
                
                <p className='player-singer'>
                    {currentSong ? currentSong.singer : ''}
                </p>

                <p className='player-song-name'>
                    {currentSong ? currentSong.name : ''}
                </p>

                <Progress />
                
            </div>
        </div>
    )
}

export default PlayerTop
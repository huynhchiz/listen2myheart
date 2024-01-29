import './Player.scss'
import Disk from './Disk/Disk'
import NextSongBtn from './Buttons/NextSongBtn'
import PauseSongBtn from './Buttons/PauseSongBtn'
import PlaySongBtn from './Buttons/PlaySongBtn'
import PrevSongBtn from './Buttons/PrevSongBtn'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import Status from './Status/Status'

const PlayerMain = () => {
    const audioContext = useContext(Context)
    const play = audioContext.play


    return (
        <div className='player-main'>

            <Disk spin={play} />

            <div className='player-main-container'>

                <div className='player-main-buttons'>
                    <Status className={'player-status-button'}/>

                    <PrevSongBtn onClick={() => audioContext.handlePrevSong()} />
                    {
                        play ? 
                        <PauseSongBtn onClick={() => audioContext.handlePause()}/>
                         :
                        <PlaySongBtn onClick={() => audioContext.handlePlay()} />
                    }

                    <NextSongBtn onClick={() => audioContext.handleNextSong()} />

                </div>

            </div>

        </div>
    )
}

export default PlayerMain
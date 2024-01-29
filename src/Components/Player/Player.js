import './Player.scss'
import PlayerTop from './PlayerTop'
import PlayerMain from './PlayerMain'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

const Player = () => {
    const audioContext = useContext(Context)
    const activeSongId = audioContext.activeSongId

    return (
        <div className='player'>
            <div className='player-container'>

                {activeSongId ?
                    <PlayerTop /> :
                    <PlayerTop className={'player-top-hide'}/>
                }
                
                <PlayerMain />

            </div>
        </div>
    )
}

export default Player
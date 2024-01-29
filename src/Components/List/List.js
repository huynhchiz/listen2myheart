import './List.scss'
import { Audio } from 'react-loader-spinner'
import { useContext } from 'react'
import { Context } from '../../Context/Context'


const List = () => {
    const audioContext = useContext(Context)
    const play = audioContext.play
    const playlist = audioContext.playlist
    const activeSongId = audioContext.activeSongId
    const setActiveSongId = audioContext.setActiveSongId

    const handleActiveSong = (songId) => {
        setActiveSongId(songId)
    }

    return (
        <div className='list'>
            <div className='list-container'>
                {
                    playlist.map(song => (
                        <div className={`song-item ${activeSongId === song.id ? 'song-active' : ''}`} 
                            key={song.id}
                            onClick={() => handleActiveSong(song.id)}    
                        >
                        
                        {activeSongId === song.id && play &&
                            <Audio
                                height="28"
                                width="28"
                                color="#f5aa3f"
                                ariaLabel="audio-loading"
                                wrapperStyle={{}}
                                wrapperClass="audio-song-active" //className
                                visible={true}
                            />
                        }

                            <div className='song-detail'>
                                <p className='song-id'>
                                    {song.id}
                                </p>

                                <p className='song-name'>
                                    {song.name}
                                </p>

                            </div>

                            <p className='song-singer'>
                                {song.singer}
                            </p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List
import { createContext, useEffect, useRef, useState } from "react";
import playlist from "../datas/playlist";

export const Context = createContext()

const Provider = ({ children }) => {
    const [play, setPlay] = useState(false)
    const [activeSongId, setActiveSongId] = useState('')
    const audioRef = useRef()

    useEffect(() => {
        if(activeSongId) {
            let audios = document.querySelectorAll('audio')
            if (audios && audios.length > 0) {
                audios.forEach(audio => audio.pause())
            }

            handlePlay()
    }
    }, [activeSongId])

    const handlePlay = () => {
        setPlay(true)
        audioRef.current.play()
    }

    const handlePause = () => {
        setPlay(false)
        audioRef.current.pause()
    }

    const findCurrentSong = () => {
        return playlist[playlist.findIndex(i => i.id === activeSongId)]
    }

    const findCurrentIndexSong = () => {
        return playlist.findIndex(song => song.id === activeSongId)
    }

    const handleNextSong = () => {
        let currentIndexSong = findCurrentIndexSong()
        if (currentIndexSong < playlist.length - 1) {
            setActiveSongId(activeSongId + 1)
        } else {
            setActiveSongId(1)
        }
    }

    const handlePrevSong = () => {
        let currentIndexSong = findCurrentIndexSong()
        if (currentIndexSong === 0) {
            let lastSongId = playlist[playlist.length - 1].id
            setActiveSongId(lastSongId)
        } else {
            setActiveSongId(activeSongId - 1)
        }
    }

    const data = {
        play,
        playlist,
        activeSongId,
        setActiveSongId,
        findCurrentSong,
        handlePlay,
        handlePause,
        handleNextSong,
        handlePrevSong
    }    

    return (
        <Context.Provider value={data} >

            <audio
                ref={audioRef}
                src={activeSongId ? playlist[playlist.findIndex(i => i.id === activeSongId)].src : ''}
            />

            {children}
        </Context.Provider>
    )
}

export default Provider
import './Buttons.scss'

const PrevSongBtn = ({ onClick }) => {
    
    
    return (
        <div className='prev-song-btn' onClick={onClick}>
            <div className='prev-song-btn-single-arr'></div>
            <div className='prev-song-btn-single-arr'></div>
        </div>
    )
}

export default PrevSongBtn
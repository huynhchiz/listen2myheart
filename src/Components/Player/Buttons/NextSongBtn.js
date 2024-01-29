import './Buttons.scss'

const NextSongBtn = ({ onClick }) => {
    
    
    return (
        <div className='next-song-btn' onClick={onClick}>
            <div className='next-song-btn-single-arr'></div>
            <div className='next-song-btn-single-arr'></div>
        </div>
    )
}

export default NextSongBtn
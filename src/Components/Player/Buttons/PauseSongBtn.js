import './Buttons.scss'

const PauseSongBtn = ({ onClick }) => {
    
    return (
        <div className='pause-song-btn' onClick={onClick}>
            <div className='pausong-btn-wrapper'>
                <div className='pause-song-btn-part1'></div>
                <div className='pause-song-btn-part2'></div>
                <div className='pause-song-btn-part3'></div>
            </div>
        </div>
    )
}

export default PauseSongBtn
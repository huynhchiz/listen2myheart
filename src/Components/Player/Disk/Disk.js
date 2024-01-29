import './Disk.scss'

const Disk = ({ spin = false }) => {

    return (
        <div className={!spin?'player-disk':'player-disk player-disk-spin'} >
            <div className='disk-middle'></div>
            <div className='disk-shadow'></div>
            <div className='disk-shadow-2'></div>
        </div>
    )
}

export default Disk
import './RepeatOne.scss'
import RepeatAll from '../RepeatAll/RepeatAll'

const RepeatOne = ({ className = '' }) => {
    return (
        <div className={`status-repeat-one ${className}`}>
            <RepeatAll />

            <div className='sro-one-icon'>1</div>
        </div>
    )
}

export default RepeatOne
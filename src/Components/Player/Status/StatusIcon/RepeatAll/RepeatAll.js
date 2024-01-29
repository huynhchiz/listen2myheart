import './RepeatAll.scss'

const RepeatAll = ({ className = '' }) => {
    return (
        <div className={`status-repeat-all ${className}`}>
                <div className='sra-line-1'></div>
                <div className='sra-arrow-1'></div>

                <div className='sra-line-2'></div>

                <div className='sra-line-3'></div>
                <div className='sra-arrow-2'></div>

                <div className='sra-line-4'></div>
        </div>
    )
}

export default RepeatAll
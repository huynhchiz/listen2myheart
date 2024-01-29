import './Random.scss'

const Random = ({ className = '' }) => {
    return (
        <div className={`status-random ${className}`}>
            <div className='sr-line-1'></div>
            <div className='sr-line-2'></div>
            <div className='sr-line-3'></div>
            <div className='sr-arrow-1'></div>

            <div className='sr-line-4'></div>
            <div className='sr-line-5'></div>
            <div className='sr-line-6'></div>
            <div className='sr-arrow-2'></div>
        </div>
    )
}

export default Random
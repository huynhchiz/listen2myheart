import { useState } from 'react'
import './Status.scss'
import Random from './StatusIcon/Random/Random'
import RepeatAll from './StatusIcon/RepeatAll/RepeatAll'
import RepeatOne from './StatusIcon/RepeatOne/RepeatOne'

const Status = ({ className = '' }) => {
    const [showList, setShowList] = useState(false)
    const [status, setStatus] = useState('repeatAll')

    const toggleShowList = () => {
        setShowList(!showList)
    }

    const handleChangeStatus = (status) => {
        setStatus(status)
        setShowList(false)
    }

    return (
        <div className={`player-status ${className}`}>
            <div className='status-active' onClick={toggleShowList}>
                {status === 'repeatAll' && <RepeatAll className='ra-active-item'/>}
                {status === 'repeatOne' && <RepeatOne className='ro-active-item'/>}
                {status === 'random' && <Random className='r-active-item'/>}
            </div>

            {
                showList ?
                <div className='status-list'>
                    <span onClick={() => handleChangeStatus('repeatAll')}>
                        <RepeatAll className={'status-list-item'}/>
                    </span>
                    <span onClick={() => handleChangeStatus('repeatOne')}>
                        <RepeatOne className={'status-list-item'}/>
                    </span>
                    <span onClick={() => handleChangeStatus('random')}>
                        <Random className={'status-list-item'}/>
                    </span>
                </div> : <></>
            }
            
        </div>
    )
}

export default Status
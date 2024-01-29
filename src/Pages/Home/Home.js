import './Home.scss'
import logo from '../../statics/listen2myheart-logo.png'
import List from '../../Components/List/List'
import Player from '../../Components/Player/Player'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>

                <div className='home-header'>
                    <img 
                        className='home-header-logo'
                        src={logo}
                        alt='logo'
                    />
                </div>

                <div className='home-content'>
                    <List />
                </div>

                <div className='home-footer'>
                    <Player />
                </div>

            </div>
        </div>
    )
}

export default Home
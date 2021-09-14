import '../styles/Banner.css'
// import logo from '../assets/logo.png'

// import Recommendations from './Recommendations'

function Banner({ children }) {


    return <div className='lmj-banner'>{children}</div>

    /*const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            <Recommendations />
        </div>)*/

    /*le code style={{}} suivant est pratique pour tester du code*/
    /*return (<div
                style={{
                    color: 'black',
                    textAlign: 'right',
                    padding: 32,
                    borderBottom: 'solid 3px black'
                }}
            >
            <h1>La maison jungle</h1>
        </div>)*/
}

export default Banner

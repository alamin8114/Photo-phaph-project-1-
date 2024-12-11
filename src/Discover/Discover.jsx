import { FaLongArrowAltRight } from 'react-icons/fa'
import './Discover.css'

const Discover = () => {
return (
    <>
    <div className="discover">
        <div className="container">
            <div className="discover-row">
            <div className="discover-head">
                <h1>Discover my <div className="italic">featured <span>works</span></div></h1>
            </div>
            <div className="discover-nav">
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Maternity</a></li>
                    <li><a href="#">Portrait</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Weeding</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </div>
            <div className="discover-card">
                <div className="single-card">
                    <img src="images/discover-img-1.jpg" alt="img" />
                    <h1>Headshot</h1>
                </div>
                <div className="single-card ">
                    <img src="images/discover-img-2.jpg" alt="img" />
                    <h1 className='card-2'>Maternity</h1>

                </div>
                <div className="single-card">
                    <img className='card-img-3' src="images/discover-img-3.jpg" alt="img" />
                    <h1>Weeding</h1>
                </div>
                <div className="single-card">
                    <img className='card-img-4' src="images/discover-img-4.jpg" alt="img" />
                    <h1 className='card-4'>Portrait</h1>
                </div>
            </div>
            <div className="discover-button">
                <a href="#">Contact with Me <span><FaLongArrowAltRight /></span></a>
            </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Discover
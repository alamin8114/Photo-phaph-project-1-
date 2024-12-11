import Navbar from '../Navbar/Navbar'
import './Banner.css'

const Banner = () => {
  return (
    <div>
        <div className="alamin-banner">
        <Navbar/>
            <div className="container">
            <div className="main-banner">
              <div className="banner">
              <div className="banner-text">
                <h1>
                Love to
                <span> capture</span> the 
                best  <span>moments</span>
                </h1>
                <p>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
              </div>
              </div>
              <div className="webpage ">
                <ul>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                </ul>
              </div>
            </div>
          <div className="banner-video-part">
            <div className="video-text flex justify-end flex-col">
              <h1>Elliana Mary</h1>
              <p>Professional Photographer</p>
            </div>
            <div className="banner-video">
              <img className='w-[470px] h-[300px] rounded' src="images/video.jpg" alt="imgs" />
            </div>
            <div className="video-logo absolute ">
              <img src="images/video-logo.png" alt="img" />
            </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
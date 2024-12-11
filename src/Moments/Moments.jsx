import { FaLongArrowAltRight } from 'react-icons/fa'
import './Moments.css'

const Moments = () => {
  return (
    <div className="moments">
        <div className="container">
            <div className="moments-row">
                <div className="moments-img">
                    <img src="images/moments.jpg" alt="img" />
                </div>
                <div className="moments-text">
                    <h1>Ready to make
                        your<span className='underline font-normal italic'> moment <br></br>
                        memorable?</span></h1>
                        <div className="moments-address">
                            <div className="moments-button">
                                <a href="#">Book Now <span><FaLongArrowAltRight /></span></a>
                            </div>
                            <div className="address">
                                <p>514 905 9958</p>
                                <p className='mt-[12px'>hello@support.com</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Moments
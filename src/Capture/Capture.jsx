import './Capture.css'
import { GiHand } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Capture = () => {
  return (
    <div className="Capture">
        <div className="container">
            <div className="capture-row">    
            <div className="capture-box">
                <div className="capture-text-box">
                    <div className="capture-text">
                        <h1>I enjoy
                        capturing people</h1>
                        <p>-ELLINA MARY</p>
                        <div className="img">
                            <img src="images/capture-small.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="capture-img">
                        <img src="images/capture.png" alt="img" />
                        <img className='capture-logo' src="images/capture-logo.png" alt="img" />
                    </div>
                    </div>
                </div>
                    <div className="capture-comment">
                        <div className="comment">
                            <h1>Hi there!  <GiHand className='text-[#FCC737] text-[36px]'/></h1>
                        </div>
                        <div className="comment-2">
                            <div className="comment-p-1 w-[431px]">
                            <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.
                            </p>
                            </div>
                            <div className="comment-p-1 w-[470px]">
                            <p>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
                            <div className="capture-button ">
                                <a href="#">Contact with Me <span><FaLongArrowAltRight /></span></a>
                            </div>
                            </div>
                        </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Capture
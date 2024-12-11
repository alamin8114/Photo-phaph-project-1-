import { FaLongArrowAltRight } from 'react-icons/fa'
import'./Blog.css'
import { GoDotFill } from "react-icons/go";

const Blog = () => {
  return (
    <div className='blog'>
        <div className="container">
            <div className="blog-main">
            <div className="blog-head">
                <h1>Latest <span className=' italic underline'>blog</span></h1>
                <div className="blog-button">
                    <a href="#">View All Blog <span><FaLongArrowAltRight /></span></a>
                </div>
            </div>
            </div>
            <div className="blog-row">
                <div className="blog-col-1">
                    <div className="single-card-blog">
                        <img src="images/blog-img-2.jpg" alt="img" />
                        <div className="date">
                        <p><GoDotFill/>05 Feb, 2022</p>
                        <p><GoDotFill/>5 min</p>
                        </div>
                        <h3>Speech has never been free, and 
                        that’s good</h3>
                    </div>
                    <div className="single-card-blog mt-[48px]">
                        <img src="images/blog-img-1.jpg" alt="img" />
                        <div className="date">
                        <p><GoDotFill/>05 Feb, 2022</p>
                        <p><GoDotFill/>5 min</p>
                        </div>
                        <h3>Speech has never been free, and 
                        that’s good</h3>
                    </div>
                </div>
                <div className="blog-col-2">
                <div className="single-card-blog">
                        <img className='col-2-img' src="images/blog-img-4.jpg" alt="img" />
                        <div className="date">
                        <p><GoDotFill/>05 Feb, 2022</p>
                        <p><GoDotFill/>5 min</p>
                        </div>
                        <h3>Speech has never been free, and 
                        that’s good</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
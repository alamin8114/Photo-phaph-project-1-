import { FaLongArrowAltRight } from 'react-icons/fa'
import './Plan.css'

const Plan = () => {
return (
    <div className='Plan'>
        <div className="container">
            <div className='flex justify-center items-center flex-col'>
            <div className="Plan-head">
                <h1>Affordable 
            <div className="italic underline">pricing plan</div></h1>
            </div>
            <div className="plan-card">
            <div className='line'></div>
                <div className="plan-card-1 flex gap-[80px] border-b-2 pb-[48px]">
                <div className="single-plan-card">
                    <div className="head">
                        <h1>Maternity</h1>
                        <h4>$500</h4>
                    </div>
                    <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                    <div className="plan-button">
                    <a href="#">Book Now<span><FaLongArrowAltRight /></span></a>
            </div>
                </div>
                <div className="single-plan-card">
                    <div className="head">
                        <h1>Portrait</h1>
                        <h4>$500</h4>
                    </div>
                    <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                    <div className="plan-button">
                    <a href="#">Book Now<span><FaLongArrowAltRight /></span></a>
                </div>
                </div>
                </div>
                <div className="Plan-card-2 flex gap-[80px] pt-[48px]">
                <div className="single-plan-card">
                    <div className="head">
                        <h1>Travel</h1>
                        <h4>$500</h4>
                    </div>
                    <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                    <div className="plan-button">
                    <a href="#">Book Now<span><FaLongArrowAltRight /></span></a>
            </div>
                </div>
                <div className="single-plan-card">
                    <div className="head">
                        <h1>Weeding</h1>
                        <h4>$500</h4>
                    </div>
                    <p>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                    <div className="plan-button">
                    <a href="#">Book Now<span><FaLongArrowAltRight /></span></a>
            </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Plan
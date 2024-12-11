import './Awards.css'

const Awards = () => {
  return (
    <div className="awards">
        <div className="container">
            <div className="alamin-awards">
                <div className="awards-row">
                    <div className="awards-text">
                        <h1>Got many
                            valuable 
                            <div className=" underline">awards</div>
                            </h1>
                    </div>
                    <div className="awards-img-text">
                    <div className="img">
                        <img src="images/awards.png" alt="img" />
                    </div>
                    <div className="awards-list">
                        <ul>
                            <li><a href="#">2021 - The Artist Award</a></li>
                            <li><a href="#">2020 - MKEL/Best Prir</a></li>
                            <li><a href="#">2019 - Portrait Award</a></li>
                            <li><a href="#">2018 - Berlin Talent</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards
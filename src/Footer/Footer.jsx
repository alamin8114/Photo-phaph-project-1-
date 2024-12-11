import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-row">
            <div className="logo">
                <img src="images/Logo.png" alt="" />
            </div>
            <p>© 2022 Elliana Mary  All Rights Reserved</p>
            <div className="footer-line"></div>
            <div className="nav-menu footer-menu">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-line-2"></div>
            <div className="webpage-footer ">
                <ul>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
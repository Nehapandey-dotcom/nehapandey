function Header(){
    return(
        <>
        <header className="header_box">
            <div className="header_left">
                <div className="header_photo">
                    <img src="nehas.png"  className="profile_img"/>
                </div>
                <div className="header_info">
                    <h4 className="profile_title">Neha <span className="last_name">Pandey</span></h4>
                    <div className="status">Frontend Developer</div>
                    <div className="social_list">
                        <ul>
                            <li>
                                <a href="" target="_blank"><i class="fi fi-brands-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/NehaPan99995428" target="_blank"><i class="fi fi-brands-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/stern_nehas98/" target="_blank"><i class="fi fi-brands-instagram"></i></a>
                            </li>
                            <li>
                                <a href="" target="_blank"><i class="fi fi-brands-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/neha-pandey-b1633a192/" target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header_right">
                <div className="header_contact">
                    <ul >
                        <li>
                            <span className="overhead">EMAIL</span>
                            <a href="mailto:pandeyneha801@gmail.com">pandeyneha801@gmail.com
                            <i class="fi fi-rs-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <span className="overhead">LOCATION</span>
                            Lucknow, Uttar Pradesh
                            <i class="fi fi-rs-marker"></i>
                        </li>
                    </ul>
                </div>
                <div className="header_contact">
                    <ul className="my_contact">
                        <li>
                            <span className="overhead">CV</span>
                            <a href="Neharesume.pdf" target="_blank">Download
                            <i class="fi fi-rs-download"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;
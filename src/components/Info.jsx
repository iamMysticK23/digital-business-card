// internal imports
import hackerCat from '../assets/hacker_cat-avatar.jpg'
import emailIcon from '../assets/email.png'
import linkedInIcon from '../assets/linkedin.png'

export default function Info(){
    return (
            <div>
                <img
                    src={hackerCat}
                    className="profile-img"
                    alt="Hacker Cat Avatar"
                />
                <div className="inner-container">
                    <h1>Kenai Epps</h1>
                    <h3>Frontend Developer</h3>
                    <a href="https://kenaiepps.com" className="website">
                        kenaiepps.com
                    </a>
                    <div className="buttons">
                        <a
                            href="mailto:k.epps23@gmail.com"
                            className="btn email-btn"
                        >
                            <div className="button-content">
                                <img src={emailIcon} alt="Email icon" />
                                Email
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kenai-epps/"
                            className="btn linkedin-btn"
                        >
                            <div className="button-content">
                                <img src={linkedInIcon} alt="LinkedIn icon" />
                                LinkedIn
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
}
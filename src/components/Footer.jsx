import GithubIcon from '../assets/github-icon.png'
import FacebookIcon  from '../assets/fb-icon.png'
import XIcon  from '../assets/x-icon.png'
import InstagramIcon from '../assets/ig-icon.png'

export default function Footer(){
    return(
        <div className='footer-icons'>
            <img src={XIcon} alt="X Icon"  />
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
            <img src={GithubIcon} alt="Github Icon"  />
        </div>
    )
}
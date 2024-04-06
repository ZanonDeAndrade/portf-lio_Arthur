import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";


import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/arthur_zanon_/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/arthur-zanon-de-andrade-082643268/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/ZanonDeAndrade">
                <GitHubIcon/>
            </a>
        </div>
    )
}
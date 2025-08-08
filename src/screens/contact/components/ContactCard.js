import Picture from "../../common/Picture";
import ContactLink from "./ContactLink";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactCard({ contactInfo }) {

    let linkedInIcon = <FaLinkedin/>
    let githubIcon = <FaGithub/>
    let emailIcon = <FaEnvelope/>

    return (
        <div id="contact-card-container">
            <div id="photo-strip">
                <Picture containerCssClass={"contact-card-img-container"} imageCssClass={"contact-img"} image={contactInfo.profileImageUrl}/>
                <div id="contact-card-paragraph-container">
                    <p>{contactInfo.contactParagraph}</p>
                </div>
            </div>
            <div id="contact-links-container">
                <ContactLink icon={linkedInIcon} text="Linkedin: linkedin.com/in/fernando-fayet/" href="https://www.linkedin.com/in/fernando-fayet/"/>
                <ContactLink icon={githubIcon} text="Github: github.com/fergorgs" href="https://github.com/fergorgs"/>
                <ContactLink icon={emailIcon} text="Email: fer.fayet@gmail.com" href="fer.fayet@gmail.com"/>
            </div>
        </div>
    );
}

export default ContactCard;
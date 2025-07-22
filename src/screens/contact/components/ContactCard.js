import Picture from "../../common/Picture";
import ContactLink from "./ContactLink";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../../../assets/profile_img.jpeg'

function ContactCard({ contactInfo }) {

    let linkedInIcon = <FaLinkedin/>
    let githubIcon = <FaGithub/>
    let emailIcon = <FaEnvelope/>

    let linkedInInfo = contactInfo.linkedIn
    let githubInfo = contactInfo.github
    let emailInfo = contactInfo.email

    return (
        <div id="contact-card-container">
            <div id="photo-strip">
                <Picture containerCssClass={"contact-card-img-container"} imageCssClass={"contact-img"} image={profileImg}/>
                <div id="contact-card-paragraph-container">
                    <p>{contactInfo.contactParagraph}</p>
                </div>
            </div>
            <div id="contact-links-container">
                <ContactLink icon={linkedInIcon} text={linkedInInfo.text} href={linkedInInfo.link}/>
                <ContactLink icon={githubIcon} text={githubInfo.text} href={githubInfo.link}/>
                <ContactLink icon={emailIcon} text={emailInfo.text} href={emailInfo.link}/>
            </div>
        </div>
    );
}

export default ContactCard;
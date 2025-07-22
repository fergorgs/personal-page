
function ContactLink({ icon, text, href }) {

    return (
        <div class="contact-link-container" onClick={() => {window.location.href = href;}}>
            <div class="contact-link-icon-container">
                {icon}
            </div>
            <div class="contact-link-text-container">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ContactLink;
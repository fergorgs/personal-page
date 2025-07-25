import { useState, useEffect } from 'react';
import '../../styles/screens/ContactScreen.css'
import '../../styles/App.css'
import ContactCard from './components/ContactCard';
import ScreenTitle from '../common/ScreenTitle';
import Aos from "aos";
import "aos/dist/aos.css";

function ContactScreen() {
    const [contactInfo, setContactInfo] = useState([]);

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
        fetch('https://raw.githubusercontent.com/fergorgs/personal-page/refs/heads/main/public/content_data/contact_screen.json')
            .then(res => res.json())
            .then(data => {
                setContactInfo(data)
            });
    }, []);

    return (
        <div id="contact-section" class="light-theme">
            <ScreenTitle text="Contact"/>
            <div data-aos="fade-up">
                <ContactCard contactInfo={contactInfo}/>
            </div>
        </div>
    );
}

export default ContactScreen;
import { useState, useEffect } from 'react';
import '../../styles/screens/EducationScreen.css'
import '../../styles/App.css'
import { useScreenSize, SCREEN_SIZE } from '../../utils/useScreenSize';
import { ORIENTATION } from '../../utils/itemOrientation';
import EducationItem from './components/EducationItem';
import ScreenTitle from '../common/ScreenTitle';
import Aos from "aos";
import "aos/dist/aos.css";

function EducationScreen() {
    const [educationItems, setEducationItems] = useState([]);
    const screenSize = useScreenSize();

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
        fetch('https://raw.githubusercontent.com/fergorgs/personal-page/refs/heads/main/public/content_data/education_screen.json')
            .then(res => res.json())
            .then(data => {
                setEducationItems(data.educationItems)
            });
    }, []);

    return (
        <div id="education-section" class="light-theme">
            <div data-aos="fade-in">
                <ScreenTitle text="Education"/>
            </div>
            {screenSize === SCREEN_SIZE.DESKTOP ? (
                educationItems.map((item, index) => (
                    index % 2 == 0 ? (
                        <div data-aos="fade-up">
                            <EducationItem item={item} orientation={ORIENTATION.LEFT} />
                        </div>
                    ) : (
                        <div data-aos="fade-up">
                            <EducationItem item={item} orientation={ORIENTATION.RIGHT} />
                        </div>
                    )
                ))
            ) : (
                educationItems.map((item, _) => (
                    <div data-aos="fade-up">
                        <EducationItem item={item} orientation={ORIENTATION.TOP} />
                    </div>
                ))
            )}
        </div>
    );
}

export default EducationScreen;
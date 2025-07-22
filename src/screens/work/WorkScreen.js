import { useState, useEffect } from 'react';
import { useScreenSize, SCREEN_SIZE } from '../../utils/useScreenSize';
import { ORIENTATION } from '../../utils/itemOrientation';
import WorkItem from './components/WorkItem';
import ScreenTitle from '../common/ScreenTitle';
import Aos from "aos";
import "aos/dist/aos.css";

function WorkScreen() {
    const [workItems, setWorkItems] = useState([]);
    const screenSize = useScreenSize();

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
        fetch('https://raw.githubusercontent.com/fergorgs/personal-page/refs/heads/main/public/content_data/work_screen.json')
            .then(res => res.json())
            .then(data => {
                setWorkItems(data.workItems)
            });
    }, []);

    return (
        <div id="work-section" class="light-theme">
            <div data-aos="fade-in">
                <ScreenTitle text="Work Experience"/>
            </div>
            {screenSize === SCREEN_SIZE.DESKTOP ? (
                workItems.map((item, index) => (
                    index % 2 == 0 ? (
                        <div data-aos="fade-up">
                            <WorkItem item={item} orientation={ORIENTATION.RIGHT} />
                        </div>
                    ) : (
                        <div data-aos="fade-up">
                            <WorkItem item={item} orientation={ORIENTATION.LEFT} />
                        </div>
                    )
                ))
            ) : (
                workItems.map((item, _) => (
                    <div data-aos="fade-up">
                        <WorkItem item={item} orientation={ORIENTATION.TOP} />
                    </div>
                ))
            )}
        </div>
    );
}

export default WorkScreen;
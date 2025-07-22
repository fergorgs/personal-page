import '../../../styles/screens/WorkScreen.css'
import { ORIENTATION } from '../../../utils/itemOrientation';
import ItemDescription from '../../common/ItemDescription';
import DivisionLine from '../../common/DivisionLine';
import Picture from '../../common/Picture';
import amazonImg from '../../../assets/amazon_intern_work_item.png'

function WorkItem({ item, orientation }) {

    return (
        <div className="work-item-container">
            {orientation === ORIENTATION.RIGHT ? (
                <>
                <div class="item-description-container item-right">
                    <ItemDescription 
                        title={item.job_title} 
                        subTitle={item.company} 
                        subSubTitle={item.location + " - " + item.duration}
                        tags={item.technologies}
                        overview={item.overview}
                        bulletPoints={item.bullet_points}
                        relevantLinks={item.relevant_links}
                    />
                </div>
                <DivisionLine orientation="VERTICAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                <div class="work-img-container work-img-left">
                    <Picture containerCssClass={"work-img"} image={amazonImg}/>
                </div>
                </>
            ) : orientation === ORIENTATION.LEFT ? (
                <>
                <div class="work-img-container work-img-right">
                    <Picture containerCssClass={"work-img"} image={amazonImg}/>
                </div>
                <DivisionLine orientation="VERTICAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                <div class="item-description-container item-left">
                    <ItemDescription 
                        title={item.job_title} 
                        subTitle={item.company} 
                        subSubTitle={item.location + " - " + item.duration}
                        tags={item.technologies}
                        overview={item.overview}
                        bulletPoints={item.bullet_points}
                        relevantLinks={item.relevant_links}
                    />
                </div>
                </>
            ) : (
                <>
                    <div class="work-img-container work-img-right">
                        <Picture containerCssClass={"work-img"} image={amazonImg}/>
                    </div>
                    <div class="item-description-container item-left">
                        <ItemDescription 
                            title={item.job_title} 
                            subTitle={item.company} 
                            subSubTitle={item.location + " - " + item.duration}
                            tags={item.technologies}
                            overview={item.overview}
                            bulletPoints={item.bullet_points}
                            relevantLinks={item.relevant_links}
                        />
                    </div>
                    <DivisionLine orientation="HORIZONTAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                </>
            )}
        </div>
    );
}

export default WorkItem;
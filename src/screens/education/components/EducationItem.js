import '../../../styles/screens/WorkScreen.css'
import { ORIENTATION } from '../../../utils/itemOrientation';
import ItemDescription from '../../common/ItemDescription';
import DivisionLine from '../../common/DivisionLine';
import Picture from '../../common/Picture';

function EducationItem({ item, orientation }) {

    return (
        <div className="education-item-container">
            {orientation === ORIENTATION.RIGHT ? (
                <>
                <div class="item-description-container item-right">
                    <ItemDescription 
                        title={item.university} 
                    />

                    {item.qualifications.map((qualification, _) => (
                        <ItemDescription 
                            subTitle={qualification.title} 
                            subSubTitle={qualification.duration}
                            bulletPoints={qualification.bullet_points}
                        />
                    ))}
                </div>
                <DivisionLine orientation="VERTICAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                <div class="education-img-container education-img-left">
                    <Picture containerCssClass={"education-img"} image={item.image_url}/>
                </div>
                </>
            ) : orientation === ORIENTATION.LEFT ? (
                <>
                <div class="education-img-container education-img-right">
                    <Picture containerCssClass={"education-img"} image={item.image_url}/>
                </div>
                <DivisionLine orientation="VERTICAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                <div class="item-description-container item-left">
                    <ItemDescription 
                        title={item.university} 
                    />

                    {item.qualifications.map((qualification, _) => (
                        <ItemDescription 
                            subTitle={qualification.title} 
                            subSubTitle={qualification.duration}
                            bulletPoints={qualification.bullet_points}
                        />
                    ))}
                </div>
                </>
            ) : (
                <>
                    <div class="education-img-container education-img-right">
                        <Picture containerCssClass={"education-img"} image={item.image_url}/>
                    </div>
                    <div class="item-description-container item-left">
                        <ItemDescription 
                            title={item.university} 
                        />

                        {item.qualifications.map((qualification, _) => (
                            <ItemDescription 
                                subTitle={qualification.title} 
                                subSubTitle={qualification.duration}
                                bulletPoints={qualification.bullet_points}
                            />
                        ))}
                    </div>
                    <DivisionLine orientation="HORIZONTAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
                </>
            )}
        </div>
    );
}

export default EducationItem;
import ExternalButton from './ExternalButton';
import Tag from './Tag';

function ItemDescription({ title, subTitle, subSubTitle, tags, overview, bulletPoints, relevantLinks }) {

    return (
        <div class="item-description">
            <h2>{title}</h2>
            {subTitle ? (<h3>{subTitle}</h3>) : null}
            {subSubTitle ? (<h4>{subSubTitle}</h4>) : null}
            <div class="item-description-tech-row">
                {tags ? (tags.map((tag, index) => (
                    index === 0 || tag.style === "PILL" ? (<Tag text={tag.text} style={tag.style} />) :
                    <><p>•</p> <Tag text={tag.text} style={tag.style} /></>
                ))) : null}
            </div>
            <div class="item-description-text">
                {overview}
                <ul>
                    {bulletPoints ? (bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))) : null}
                </ul>
            </div>
            {relevantLinks ? (relevantLinks.map((link, _) => (
                <ExternalButton text={link.text} url={link.url} />
            ))) : null}
        </div>
    );
}

export default ItemDescription;
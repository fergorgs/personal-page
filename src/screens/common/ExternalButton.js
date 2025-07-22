
function ExternalButton({ text, url }) {

    return (
        <div class="external-button" onClick={() => {window.location.href = {url}; }}> {/*class="about-button long-button"*/}
            <h4>{text}</h4>
        </div>
    );
}

export default ExternalButton;
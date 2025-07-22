
export const LINE_ORIENTATION = {
    HORIZONTAL: 'HORIZONTAL',
    VERTICAL: 'VERTICAL'
};

function DivisionLine({ orientation, lineWidthInPixels, lineStyle, color }) {

    return (
        orientation === LINE_ORIENTATION.VERTICAL ? (
            <div class="vertical-division-line"></div>
        ) : (
            <div class="horizontal-division-line"></div>
        )
    );
}

export default DivisionLine;
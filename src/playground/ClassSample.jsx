import React from "react";

class ClassSample extends React.Component {
    render() {
        const sampleJsx = <p>Example JSX</p>;

        return (
            <>
                <div>
                    Neki HTML
                </div>
                {sampleJsx}
            </>
        )
    }
}

export default ClassSample;
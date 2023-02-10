import { useState } from "react";

const Accordion = () => {
    const accordionStyle = {
        border: '1px solid black',
        margin: 30,
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'left'
    }

    const [isOpened, setIsOpened] = useState(false);

    return (
        <div style={accordionStyle}>
            <div
                style={{padding: '8px 16px'}}
                onClick={() => setIsOpened(!isOpened)}
            >
                Lorem ipsum
            </div>
            {
                isOpened &&
                    <div style={{borderTop: '1px solid silver', padding: '8px 16px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis ex cupiditate ut minima officia ullam totam dignissimos consequatur, fugiat dolorum obcaecati recusandae deserunt ea facere et impedit labore accusantium.
                    </div>
            }
        </div>
    )
}

export default Accordion;
import React from "react";

const DemoOuput = (props) => {
    console.log('Demo output');
    return (
        <p>{props.show ? 'This is new!' : ''}</p>
    );
}

export default React.memo(DemoOuput);
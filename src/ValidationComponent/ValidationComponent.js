import React from 'react';

const ValidationComponent = (props) =>{
    let text = 'Text Long enough';
    if(props.TextValue <= 5){
        text = 'Text too short';
    }
    //The other way is to use ternary operator here, but better approach is if condition
    return(
        <div>
            <p>{text}</p>
        </div>
    );
}

export default ValidationComponent;
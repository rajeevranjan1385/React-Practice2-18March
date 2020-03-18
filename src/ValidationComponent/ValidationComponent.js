import React from 'react';

const ValidationComponent = (props) =>{
    let text = '';
    if(props.TextValue > 5){
        text = 'Too long text';
    }else{
        text = 'Short text';
    }
    return(
        <div>
            <p>{text}</p>
        </div>
    );
}

export default ValidationComponent;
import React from 'react';
import './CharComponent.css';

const CharComponent = (props) =>{
    return(
        <div className="InlineText" onClick={props.Clicked}>
            <p>{props.Value}</p>
        </div>
    );
}

export default CharComponent;
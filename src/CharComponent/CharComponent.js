import React from 'react';
import './CharComponent.css';

const CharComponent = (props) =>{
    return(
        <div className="InlineText">
            <p>{props.Value}</p>
        </div>
    );
}

export default CharComponent;
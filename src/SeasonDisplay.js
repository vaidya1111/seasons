import React from "react";
import './SeasonDisplay.css'

const seasonConfig={
    Summer:{
        text:"Let's Hit the beach",
        iconName:'sun'
    },
    Winter:{
        text:"Burr, it is cold",
        iconName:'snowflake'
    }
};

const getseason= (lat, month)=>{
    if(month>2 && month <9){
        return lat>0 ? 'Summer' :'Winter';
    }
    else{
        return lat>0 ? 'Winter' :'Summer';
    }
};


const SeasonDisplay = (props)=>{
    const season= getseason(props.lat, new Date().getMonth());
    const {text, iconName}=seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1 className='season-text'>{text}</h1> 
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay; 
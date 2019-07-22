import React from 'react'
import './SeasonDisplay.css' // Here we have to write along with extension
const getSeason=(lat,month)=>{
    if(month>2 && month<9)
    return (lat>0?'summer':'winter')
    else
    return (lat>0?'winter':'summer')
}
//code refactoring so that do not have to use ternary expressions again and again
const seasonConfig={
    summer:{
        text:"let's hit the beach",
        iconName:'sun'
    },
    winter:{
        text:"Burr,its chilly",
        iconName:'snowflake'
    }
}

const SeasonDisplay=props=>{
    
    const season=getSeason(props.lat,new Date().getMonth())
    // const text=season==='summer'? "let's hit the beach":"Burr,its chilly"
    // const icon=season==='summer'? 'sun':'snowflake'
    const {text,iconName}=seasonConfig[season]
    return(
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    )
    

}

export default SeasonDisplay

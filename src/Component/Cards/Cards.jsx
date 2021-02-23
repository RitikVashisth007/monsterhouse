import React from "react";
import './Card.css'

const Card =(props)=>(
<div className="Card">
<img className="monsterImg" alt={props.monster.name} src={`https://robohash.org/${props.monster.name}?set=set2`}/>
<h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>
</div>)


export default Card
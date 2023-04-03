import React from "react";

const Card = (props) =>{
    const {name, username, id, email} = props;
    return(
        <div className = " tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img alt = "robots" src={`https://robohash.org/${id}?200x200"`}/>
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;
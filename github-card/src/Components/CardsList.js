import React from 'react';
import Followers from './Followers'


export default function CardsList(props) {
    // console.log(props.data)
    return (
        <div className = "cards">
            <div class = "mygithub">
                <img width = "200px" height = "200px" src = {props.data.avatar_url} />
                <p>GithubName : {props.data.login}</p>
                <p>Name : {props.data.name}</p>
                <p>Location: {props.data.location}</p>
            </div>
            <Followers followers = {props.followers}/>
        </div>
        )
} 
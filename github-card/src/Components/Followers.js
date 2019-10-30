import React, { Component } from 'react'

export default function Followers(props) {
    console.log(props.followers)
    return (
        <div className = "followers"> 
            {props.followers.map(eleme => (
                <div className = "follower">
                <img width = "200px" src = {eleme.avatar_url} />
                <p>{eleme.login}</p>
                <p>{eleme.location}</p>
                <a target = "_blank" href = {eleme.html_url}> GitHub</a>
            </div>)
            )}
        </div>)
}


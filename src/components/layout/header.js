import React from 'react'

const header = () =>{

    return (
        <div className = "HeaderContainer">
            <div className= "leftItem">
                <h1>DEMO Streaming</h1>
            </div>
            <div className= "rightItem">
                <div className="loginText">Log in</div>
                <button className="headerButton" >Start your free trial</button>
            </div>
        </div>

    )
}
export default header;
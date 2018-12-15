import React from 'react'
import fb from '../../assets/social/facebook-white.svg'
import tw from '../../assets/social/twitter-white.svg'
import is from '../../assets/social/instagram-white.svg'
import ap from '../../assets/store/app-store.svg'
import gg from '../../assets/store/play-store.svg'
import wi from '../../assets/store/windows-store.svg'

const footer = () =>{

    return(
        <div className = "footerContainer">
            <div className = 'textContainer'>  
                <ul className="Flex-ul">
                    <li className="Flex-item">Home</li>
                    <li className="Flex-item">Terms and Conditions</li>
                    <li className="Flex-item">Privacy Policy</li>
                    <li className="Flex-item">Collection Statement</li>
                    <li className="Flex-item">Help</li>
                    <li className="Flex-item">Manage Account</li>
                </ul>
                <p>Copyright © 2016 Demo Streamin. All Rights Reserved</p>
            </div>
            <div className = 'imageContainer'>
                <div className= "leftItem">
                    <img src={fb} width="30" height="30" alt="Facebook"/>
                    <img src={tw} width="30" height="30" alt ="Twitter"/>
                    <img src={is} width="30" height="30" alt="Instagram" />
                </div>
                <div className= "rightItem">
                    <img src={ap} width="140" height="40" alt="App Store"/>
                    <img src={gg} width="140" height="40" alt="Play Store"/>
                    <img src={wi} width="120" height="40" alt="Microsoft Store" />
                </div>

            </div>
            

        </div>

    )
}

export default footer;
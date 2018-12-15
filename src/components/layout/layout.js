import React from 'react'
import Aux from '../../hoc/aux'
import Footer from '../layout/footer'
import Header from '../layout/header'

const layout = (props) => (
    <Aux>
        <div className = "moduleWrapper">
            <Header/>
            <div className="contentContainer">
                {props.children}   
            </div>
           <Footer/>
            
        </div>
    </Aux>

)

export default layout;
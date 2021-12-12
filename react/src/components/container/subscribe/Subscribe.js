import React from 'react'
import "./subscribe.css"

function subscribe() {
    return (
        <div className='container-fluid subscribe'>
            <div className='row'>
                            
                            <div className='col-xl-6 col-lg-6  subscribe-div-1'>
                                <h1>Let's Discuss</h1>
                                <p>The 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                            </div>

                            <div className='col-xl-6 col-lg-6  col sm subscribe-div-2' >
                                <div>
                               <input type="text"/>
                               <button>Sign up</button>
                               </div>
                            </div>
            </div>
        </div>
    )
}

export default subscribe

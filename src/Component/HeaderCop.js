// import React from 'react'

import React, { Component } from 'react'


class HeaderCop extends Component {
    
    render() {
        var vst ={
            color:"black",
            textShadow:"3px 3px 5px blue",
            fontSize:"30px",
            margin:"30px"
        }
    
        return (
            <div>
                 <h1 style={vst}>Styling using Functional and Class Component</h1>
            </div>
        )
    }
}
export default HeaderCop



// function HeaderCop() {
    
//     return (
//         <div className='maindom'>
//         </div>
//     )
// }
// export default HeaderCop;
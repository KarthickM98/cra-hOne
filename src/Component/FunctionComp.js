

import React from 'react'


function FunctionCC(){
    const vt={
        color:"blue",
        textDecorationLine:'underline'
    }
    
    return(
        <div className='rightblk'>
            <h1 className='righthead'>this is created using functional component</h1>
            <p>this is done using External css</p>
            <p style={vt}>this is done using Internal css</p>
        </div>
    )
}
export default FunctionCC
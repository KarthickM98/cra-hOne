
  import React ,{Component} from 'react'

  class ClassCC extends Component{
      render(){
        const vt={
            color:"blue",
            textDecorationLine:'underline'
        }
        
          return(
              <div className='leftblk'>
                  
                  <h1 className='lefthead'>this is created using class component</h1>
                  <p>this is done using External css</p>
                  <p style={vt}>this is done using Internal css</p>
              </div>
          )

      }
  }
  export default ClassCC;



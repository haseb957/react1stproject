import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
class Landing extends Component{
   render(){
       return(
       <div style={{width:'100%', margin:'auto'}}>

       <Grid className="landing-grid">
       <Cell col={12}>
       <img src="image1.jpg" alt=""></img>
          
       </Cell>

       </Grid>

       </div>
       );
   }
}

export default Landing;
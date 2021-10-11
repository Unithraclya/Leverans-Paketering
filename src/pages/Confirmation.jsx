import React from 'react'
import {Link} from 'react-router-dom';

export default function Confirmation() {
   
   
    var styles = {
        div:{
          display: "block",
          marginTop:"100px"
        },
            label:{
                display: "block",
                marginTop: "10px",
                fontSize: "15px",
                cursor: "pointer"

            }
    }
    

    return (
        <div style={styles.div}>
            Tack för ditt köp!
            <br/>
            <Link to="/"><label style={styles.label} type="text">Till första sidan</label></Link>

        </div>
    )
}
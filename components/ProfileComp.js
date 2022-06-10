import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import reel from '../Assets/reel.png'
function ProfileComp(){

    return(
       <div>
           <Navbar/>
           <div>
               <div className='profile_upper'>
                   <Image src={reel} style={{height:"8rem", width:"8rem", borderRadius:"50%", border:"1px solid black"}}/>
                   <div style={{flexBasis:"40%"}}> 
                        <h1> Name</h1>
                        <h3> Posts: 10</h3>
                   </div> 
               </div> 
                <hr/>
               <div className='profile_videos'>
                    <video/>
               </div>
           </div>
       </div>
    )
}

export default ProfileComp
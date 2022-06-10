import React from 'react'
import { useContext } from 'react'
import ProfileComp from '../components/ProfileComp'
import {AuthContext} from '../context/auth'
import { useRouter } from 'next/router'
function Profile(){

    // const {user} = useContext(AuthContext)

    // const Redirect = ()=>{
    //     const router = useRouter()
    //     router.push('/login')
    //     return null;
    // }
    return(

        // <>
        // {
        //     user?.uid?<ProfileComp/>:<Redirect/>
        // }
        // </>
        <ProfileComp/>
    )
}

export default Profile
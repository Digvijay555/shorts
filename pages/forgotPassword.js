import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import Button from '@mui/material/Button';
import picc from '../Assets/reel.png'
import bg1 from '../Assets/bg1.jpg'
import bg2 from '../Assets/bg2.jpg'
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../context/auth';
import { async } from '@firebase/util';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';


function Index(){

    const router = useRouter()
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const[error,setError] = React.useState('');
    const[loading,setLoading] = React.useState('');

    const {forgot, user} = useContext(AuthContext);

    const handleClick = async() =>{
        try{
            setLoading(true);
            setError('')
            await forgot(email)
            router.push('/login');
        }
        catch(err){
            console.log(err)
            setError(err.message)
            setTimeout(()=>{
                setError('');
            },2000)
        }
        setLoading(false); 
    }

    useEffect(()=>{
        if(user){
             router.push('/');
        }
        
    },[user])
    return(
        <div>
        <div className='login-container'>
            <div className='carbg'> 
                <div className='car'>
                {/* <CarouselProvider
                    naturalSlideWidth={241}
                    naturalSlideHeight={423}
                    totalSlides={1}
                >
                    <Slider>
                        <Img src={bg1}/>
                    </Slider>
                </CarouselProvider> */}
                <Carousel showIndicators={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                interval={2000}
                autoPlay={true}>
                    <Image src={bg1}></Image>
                    <Image src={bg2}></Image>
                </Carousel>
                </div>
            </div>
            <div>
            <div className='login-card'>
                <Image src={picc} className='title-img' />
            <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {/* <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} /> */}
            {/* <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="FullName" variant="outlined" /> */}
           
           {
                error !='' &&
                <div style={{color:'red'}}>{error}</div>
           }
           
            <Button variant="contained" fullWidth 
            component="span" style={{marginTop:'1rem'}} onClick={handleClick} disable={loading}>
            Send Email
            </Button>
            {/* <div style={{color:'blue'}}>Forgot Password?</div> */}
            </div>
            <div className="bottom-card">
            Don&apos;t have an Account? <Link href='signup'><span style={{color:'blue'}}>Sign Up</span></Link>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Index; 
import React, {useEffect} from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import { Grid } from "@mui/material";
import style from "./style.module.css";


function About(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      
    return(
        <Grid > 
            <Header />
            <Grid className={style.mpage}>
                <Grid className={style.mpg1}>
                    <Grid>
                        <h1>About</h1>
                    </Grid>
                </Grid>
                <Grid className={style.mpg2} style={{textAlign:"left" , margin:"5% 5%"}}>
                    <h2 style={{fontWeight:"600", fontSize:"2rem"}}>Our History</h2>
                    <p>Trippy is owned and managed by Trippy.In Pvt. Ltd., a leading brand in web desinging services and e-commerce solution. Trippy.In Pvt. Ltd. is countedfor it's expertise in web solutions and it's top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work experience.</p>
                    <h2 style={{fontWeight:"600", fontSize:"2rem" , marginTop:"3%"}}>Our Mission</h2>
                    <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients. That too with ultimate transparency and cost-effectiveness.</p>
                    <h2 style={{fontWeight:"600", fontSize:"2rem" , marginTop:"3%"}}>Our Vision</h2>
                    <p>To saw the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    );
}

export default About;
import React from "react";
import { Grid } from "@mui/material";
//css
import style from "./style.module.css";
//image
import img1 from "../../../Assets/Image/1.jpg";
import img2 from "../../../Assets/Image/2.jpg";
import img3 from "../../../Assets/Image/3.jpg";
import img4 from "../../../Assets/Image/4.jpg";

export default function PopularDestination() {
    return (
        <Grid className={style.mpage} style={{marginTop:"5%" }}>
            <Grid className={style.part1}>
                <Grid className={style.text}>
                    <Grid className={style.h1} style={{fontSize:"3rem" , fontWeight:"600" , paddingTop:"3%"}}>Popular Destinations</Grid>
                    <Grid className={style.h2}>
                        Tours give u an opportunity to see a lot,within a time frame.
                    </Grid>
                    
                </Grid>
            </Grid>

            <Grid container direction="row" lg={12} alignItems="center"
                style={{ paddingLeft: "10%", paddingRight: "5%" , }}>
                <Grid 
                    item lg={6}
                    textAlign="left"
                    lineHeight="140%"
                    style={{ marginTop: "5%" , fontSize:"1.5rem" }} 
                >
                    <Grid style={{fontWeight:"bold"}}><span className={`${style.lineHover}`}> Taal Volcano,Batangas : </span> </Grid>
                    <Grid > 
                        <span className={`${style.lineHover}`}> One of the most iconic views in Luzon, Mt. Taal </span> 
                        <span className={`${style.lineHover}`}> boasts a volcano inside a lake inside an island. If</span>
                        <span className={`${style.lineHover}`}>you fancy a closer look, the hikeup to the crater </span> 
                        <span className={`${style.lineHover}`}> is a mere 45 minutes, and is easy enough for </span> 
                        <span className={`${style.lineHover}`}> beginners. Guides will assist you most of the way, </span> 
                        <span className={`${style.lineHover}`}> and you'll seethe peculiar environment found on </span> 
                        <span className={`${style.lineHover}`}> an active volcano, includingvolcanic rocks and </span> 
                        <span className={`${style.lineHover}`}> steam vents. The hike can be dusty and hot, so </span> 
                        <span className={`${style.lineHover}`}> plan for an early morning trip, and then unwind </span> 
                        <span className={`${style.lineHover}`}> with some bulalobefore heading back home! </span> 
                         
                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <img src={img1} alt=" " className={`${style.imgHover}`} style={{ padding: "1.5%", height: "45vh", width: "16vw", marginBottom:"-30px" }} />

                    <img src={img2} alt=" " className={`${style.imgHover}`} style={{ padding: "1.5%", height: "45vh", width: "16vw",}} />
                </Grid>
            </Grid>


            <Grid container direction="row" lg={12} alignItems="center"
                style={{ paddingLeft: "5%", paddingRight: "10%" , marginTop:"3%" }}>
                <Grid item lg={6}>
                    <img src={img3} alt=" " className={`${style.imgHover}`} style={{ padding: "1.5%", height: "45vh", width: "16vw", }} />

                    <img src={img4} alt=" " className={`${style.imgHover}`} style={{ padding: "1.5%", height: "45vh", width: "16vw",marginBottom:"-30px" }} />
                </Grid>
                <Grid item lg={6}
                    textAlign="left"
                    lineHeight="140%"
                    style={{ marginTop: "5%" , fontSize:"1.5rem" }} 
                     >
                        
                        <Grid style={{fontWeight:"bold"}}><span className={`${style.lineHover}`}>Mt. Daguldul, Batangas : </span></Grid>
                    
                    
                        <Grid >
                        <span className={`${style.lineHover}`}> If you're looking for a hike that's a little more </span>     
                        <span className={`${style.lineHover}`}> challenging but
                        still good for a beginner </span>     
                        <span className={`${style.lineHover}`}> mountaineer, check out Mt. Daguldul in San </span>     
                        <span className={`${style.lineHover}`}> Juan, Batangas. You'll start your hike from the </span>     
                        <span className={`${style.lineHover}`}> beach and pass
                        through tropical forest, different </span>     
                        <span className={`${style.lineHover}`}> rock formations, and small
                        streams. There's a </span>     
                        <span className={`${style.lineHover}`}> small store halfway up the trail where you can </span>     
                        <span className={`${style.lineHover}`}>take a break and drink buko juice, and though </span>     
                        <span className={`${style.lineHover}`}> the summit itself may
                        not have the best view, the </span>     
                        <span className={`${style.lineHover}`}> breeze is fantastic. Once you've made it
                        back </span>     
                        <span className={`${style.lineHover}`}>  down, head straight to the beach for a refreshing, </span>     
                        <span className={`${style.lineHover}`}> well-deserved swim. </span>     
                            
                       </Grid>
                    
                </Grid>
                
            </Grid>
 
        </Grid>
    );
}


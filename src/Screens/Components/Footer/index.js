import React from "react";
import { Grid } from "@mui/material";
import style from "./style.module.css";
import Logo from "../../../Assets/Icon/Flogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";



export default function Footer() {
    
    return (
        <Grid container direction="row" lg={12} style={{ height: "50vh", width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "black", marginTop: "-50px" }}>

            <Grid style={{ display: "flex", justifyContent: "space-between" , paddingRight:"15%", paddingTop:"4%", paddingLeft:"10%",}}>
                <Grid   style={{width:"40%", textAlign:"left"}}>
                    <img src={Logo} alt="" style={{ width: "20%" }} />
                </Grid>
                <Grid style={{ display: "flex", gap:"50px", color: "white", }} >

                    <Grid ><InstagramIcon /></Grid>
                    <Grid ><TwitterIcon /></Grid>
                    <Grid ><GitHubIcon /></Grid>
                    <Grid > <YouTubeIcon /></Grid>

                </Grid>

            </Grid>
            <Grid container direction="row" lg={12} style={{ paddingBottom: "3%", marginLeft: "9.5%" }}>
                <Grid container direction="column" lg={3} style={{ color: "white" }} >
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Project
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Changelog
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Status</Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>License</Grid>

                </Grid>

                <Grid container direction="column" lg={3} style={{ color: "white" }}>
                    <Grid item lg={3} className={`${style.menuItem}`} >
                        Community
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        GitHub
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Issues</Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Project</Grid>

                </Grid>

                <Grid container direction="column" lg={3} style={{ color: "white" }}>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Help
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Support
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Troubleshooting</Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Contact Us</Grid>

                </Grid>

                <Grid container direction="column" lg={3} style={{ color: "white" }}>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Others
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>
                        Terms Of Service
                    </Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>Privacy Policy</Grid>
                    <Grid item lg={3} className={`${style.menuItem}`}>License</Grid>

                </Grid>

            </Grid>

        </Grid>


    );
}

import React, {useEffect} from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import { Grid } from "@mui/material";
import style from "./style.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../Assets/Image/1.jpg";
import Img2 from "../../Assets/Image/2.jpg";
import Img3 from "../../Assets/Image/3.jpg";
import Img4 from "../../Assets/Image/anurag.jpg";
import Img5 from "../../Assets/Image/manmath.jpg";
import Img6 from "../../Assets/Image/ruksar.jpg";
import Img7 from "../../Assets/Image/amruta.jpg";
import Img8 from "../../Assets/Image/girija.jpg";
import Img9 from "../../Assets/Image/sudeep.png";
import Img10 from "../../Assets/Image/rutuparna.jpg";
import Img11 from "../../Assets/Image/abhijeet.jpg";
import Img12 from "../../Assets/Image/pritiranjan.jpg";
import Img13 from "../../Assets/Image/debashis.jpg";




function Contact() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <Grid container direction="row" lg={12} className={style.bpg}>
            <Grid item lg={12}>
                <Header />
            </Grid>
            <Grid item lg={12}>
                <Grid className={style.bpg1}>
                    <Grid>
                        <h1>Contact</h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item={12}>
                <Grid container direction="row" lg={12} style={{padding:"4%"}}>
                    <Grid item lg={6}>
                        <Grid style={{}}>
                            <h1>Contact us</h1>

                            <Carousel>
                                <div>
                                    <img src={Img4} alt="" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src={Img10} alt="" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img src={Img11} alt="" />
                                    <p className="legend">Legend 3</p>
                                </div>
                                <div>
                                    <img src={Img5} alt="" />
                                    <p className="legend">Legend 4</p>
                                </div>
                                <div>
                                    <img src={Img6} alt="" />
                                    <p className="legend">Legend 5</p>
                                </div>
                                <div>
                                    <img src={Img8} alt="" />
                                    <p className="legend">Legend 6</p>
                                </div>
                                <div>
                                    <img src={Img9} alt="" />
                                    <p className="legend">Legend 7</p>
                                </div>
                                <div>
                                    <img src={Img12} alt="" />
                                    <p className="legend">Legend 8 </p>
                                </div>
                                <div>
                                    <img src={Img13} alt="" />
                                    <p className="legend">Legend 9</p>
                                </div>
                                <div>
                                    <img src={Img7} alt="" />
                                    <p className="legend">Legend 10</p>
                                </div>

                            </Carousel>


                        </Grid>
                    </Grid>
                    <Grid item lg={6} style={{ paddingBottom: "1%", width: "100%" }}>
                        <Grid >
                            <form className={style.bpg2}>
                                <h1>Send a message to us</h1>
                                <input type="text" name="name" id="" placeholder="Enter name" />
                                <input type="email" name="email" id="" placeholder="example@gmail.com" />
                                <input type="phone" name="phone" id="" placeholder="+91" />
                                <textarea name="message" id="" cols="30" rows="10" placeholder="Type here..." />
                                <button type="submit" >send</button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Footer />
                </Grid>
            </Grid>




        </Grid>
    );
}

export default Contact;
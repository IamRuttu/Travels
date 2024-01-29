import React, {useEffect} from "react";

import Header from "../Components/Header/index";
import image1 from "../../Assets/Image/1.jpg";
import image2 from "../../Assets/Image/2.jpg";
import image3 from "../../Assets/Image/3.jpg";
import image4 from "../../Assets/Image/4.jpg";
import image5 from "../../Assets/Image/5.jpg";
import image6 from "../../Assets/Image/6.jpg";
import image7 from "../../Assets/Image/7.jpg";
import image8 from "../../Assets/Image/8.webp";
import image9 from "../../Assets/Image/9.webp";
import image10 from "../../Assets/Image/10.webp";
import image11 from "../../Assets/Image/11.webp";
import image12 from "../../Assets/Image/12.webp";
import image13 from "../../Assets/Image/13.webp";
import image14 from "../../Assets/Image/14.webp";
import image15 from "../../Assets/Image/15.webp";
import image16 from "../../Assets/Image/16.webp";
import image17 from "../../Assets/Image/17.jpeg";
import image18 from "../../Assets/Image/18.jpeg";
import image19 from "../../Assets/Image/19.jpeg";
import image20 from "../../Assets/Image/20.jpg";
import image21 from "../../Assets/Image/21.jpeg";
import image22 from "../../Assets/Image/22.jpg";
import image23 from "../../Assets/Image/23.jpeg";
import image24 from "../../Assets/Image/24.jpeg";
import image25 from "../../Assets/Image/25.jpeg";
import image26 from "../../Assets/Image/26.jpeg";
import image27 from "../../Assets/Image/27.jpeg";
import image28 from "../../Assets/Image/28.jpeg";
import image29 from "../../Assets/Image/29.jpeg";
import image30 from "../../Assets/Image/30.jpeg";
import image31 from "../../Assets/Image/31.jpeg";
import image32 from "../../Assets/Image/32.jpeg";
import image33 from "../../Assets/Image/33.jpeg";
import image34 from "../../Assets/Image/34.jpeg";
import image35 from "../../Assets/Image/35.jpeg";
import image36 from "../../Assets/Image/36.jpeg";


import style from "./style.module.css";
import { Grid } from "@mui/material";
import Footer from "../../Screens/Components/Footer/index";

function Gallery() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Header />
      <Grid container direction="row" lg={12} justifyContent="center" style={{paddingBottom:"50px"}}>
        <Grid item lg={3}>
          {/* 1 */}
          <img
            src={image1}
            style={{ padding: "1%", width: "99%", paddingTop: "130px" }}
          />
          <img src={image2} style={{ padding: "1%", width: "99%" }} />
          <img src={image3} style={{ padding: "1%", width: "99%" }} />
          <img src={image4} style={{ padding: "1%", width: "99%" }} />
          <img src={image5} style={{ padding: "1%", width: "99%" }} />
          <img src={image6} style={{ padding: "1%", width: "99%" }} />
          <img src={image7} style={{ padding: "1%", width: "99%" }} />
          <img src={image8} style={{ padding: "1%", width: "99%" }} />
          
          
          
        </Grid>

        <Grid item lg={3}>
          
          <img
            src={image10}
            style={{ padding: "1%", width: "99%", paddingTop: "130px" }}
          />
          <img src={image11} style={{ padding: "1%", width: "99%" }} />
          <img src={image12} style={{ padding: "1%", width: "99%" }} />
          <img src={image13} style={{ padding: "1%", width: "99%" }} />
          <img src={image14} style={{ padding: "1%", width: "99%" }} />
          <img src={image15} style={{ padding: "1%", width: "99%" }} />
          <img src={image16} style={{ padding: "1%", width: "99%" }} />
          <img src={image17} style={{ padding: "1%", width: "99%" }} />
          
          
          
        </Grid>

        <Grid item lg={3}>
          
          <img
            src={image20}
            style={{ padding: "1%", width: "99%", paddingTop: "130px" }}
          />
          <img src={image21} style={{ padding: "1%", width: "99%" }} />
          <img src={image22} style={{ padding: "1%", width: "99%" }} />
          <img src={image23} style={{ padding: "1%", width: "99%" }} />
          <img src={image24} style={{ padding: "1%", width: "99%" }} />
          <img src={image25} style={{ padding: "1%", width: "99%" }} />
          <img src={image26} style={{ padding: "1%", width: "99%" }} />
          <img src={image27} style={{ padding: "1%", width: "99%" }} />
          <img src={image19} style={{ padding: "1%", width: "99%" }} />
          <img src={image18} style={{ padding: "1%", width: "99%" }} />
          
          
        </Grid>

        <Grid item lg={3}>

          <img
            src={image30}
            style={{ padding: "1%", width: "99%", paddingTop: "130px" }}
          />
          <img src={image31} style={{ padding: "1%", width: "99%" }} />
          <img src={image32} style={{ padding: "1%", width: "99%" }} />
          <img src={image33} style={{ padding: "1%", width: "99%" }} />
          <img src={image34} style={{ padding: "1%", width: "99%" }} />
          <img src={image35} style={{ padding: "1%", width: "99%" }} />
          <img src={image36} style={{ padding: "1%", width: "99%" }} />
          <img src={image28} style={{ padding: "1%", width: "99%" }} />
          <img src={image29} style={{ padding: "1%", width: "99%" }} />
          <img src={image9} style={{ padding: "1%", width: "99%" }} />
          
         
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default Gallery;
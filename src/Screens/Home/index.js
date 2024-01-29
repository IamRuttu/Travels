import React, {useEffect} from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import { Grid, Button } from "@mui/material";
import style from "./style.module.css";
import PopularDestination from "../Components/Service/index";
import RecentTrip from "../Components/RecentTrip";
// image
import Image1 from "../../Assets/Image/m-bg.jpg";
import { useNavigate } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ['Your Journey Your Story', 'Your Dream You Do', 'You Tavel You Grow'];


function MainPage() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const navigate = useNavigate();
    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    return (
        <Grid className={style.main}>
            <Grid className={style.mbg}>
                <Grid className={style.nav}>
                    <Header />
                </Grid>
                <Grid className={style.content}>
                    <Grid className={style.text}>

                        <Grid className={style.h1}><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></Grid>

                        <Grid className={style.h2}>Choose Your Favourite Destination</Grid>
                    </Grid>
                    <Grid className={style.Button}>
                        <Button variant="contained" onClick={() => navigate("/gallery")}>
                            <span></span>Gallery
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className={style.mbg2}>
                <PopularDestination />
            </Grid>

            <RecentTrip  />

            <Footer />
            
        </Grid>

    );
}

export default MainPage;

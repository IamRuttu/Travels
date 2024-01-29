import React from "react";
import { Grid } from "@mui/material";
//image
import img1 from "../../../Assets/Image/5.jpg";
import img2 from "../../../Assets/Image/6.jpg";
import img3 from "../../../Assets/Image/7.jpg";
import img4 from "../../../Assets/Image/8.webp";
import img5 from "../../../Assets/Image/9.webp";
import img6 from "../../../Assets/Image/10.webp";
//css
import style from "./style.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  
  return (
    <Grid className={style.mbg3} container direction="row" lg={12} alignItems="center"
      style={{ margin: "5% 0" }} >


      <Grid className={style.part1} item lg={12} style={{ paddingRight: "40%" }}>
        <Grid className={style.text} >
          <Grid className={style.h1} style={{ color: "black", fontWeight: "600", fontSize: "3rem", marginLeft: "60%", marginTop:"5%" }}>Recent Trips</Grid>
          <Grid className={style.h2} style={{ marginLeft: "60%" }}>
            You can discover unique destinations using Google Maps.
          </Grid>
        </Grid>
      </Grid>


      <Grid container lg={12} sm={12} direction="row" justifyContent="center" alignItems="center"  spacing={10}
      style={{padding:"5%"}} >
        <Grid item lg={4} sm={6}>
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img3}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Indonesia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹50,000
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item lg={4} sm={6}>
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Malaysia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹60,000
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item lg={4} sm={6}>
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  France
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹80,000
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={4} sm={6} >
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img4}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Egypt
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹90,000
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item lg={4} sm={6}>
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img5}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Luxemberg
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹1,00,000
              </Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item lg={4} sm={6}>
          <Card className={`${style.cardRoot}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                img src={img6}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lakshadweep
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" className={`${style.button}`}>
                Share
              </Button>
              <Button size="medium" color="primary" className={`${style.button}`}>
               Book Again ₹30,000
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

      <Grid className={style.part3} lg={12} style={{ display: "flex", justifyItems: "flex-start", paddingLeft: "10%", paddingRight: "10%" }}>

      </Grid>

    </Grid>
  );
}


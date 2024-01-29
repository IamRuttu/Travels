import React, {useEffect} from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import style from "./style.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
//image
import img1 from "../../Assets/Image/5.jpg";
import img2 from "../../Assets/Image/6.jpg";
import img3 from "../../Assets/Image/7.jpg";
import img4 from "../../Assets/Image/8.webp";
import img5 from "../../Assets/Image/9.webp";
import img6 from "../../Assets/Image/10.webp";
import img7 from "../../Assets/Image/11.webp";
import img8 from "../../Assets/Image/12.webp";
import img9 from "../../Assets/Image/13.webp";
import img10 from "../../Assets/Image/14.webp";
import img11 from "../../Assets/Image/15.webp";
import img12 from "../../Assets/Image/16.webp";


function Services() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <Grid container direction="row" lg={12} className={`${style.mpage}`}>
            <Grid item lg={12}>
                <Header />
            </Grid>

            <Grid className={style.mbg3} container direction="row" lg={12} alignItems="center"
                style={{ margin: "10% 0" }}  >


                <Grid className={style.part1} item lg={12} style={{ paddingRight: "40%" }}>
                    <Grid className={style.text} >
                        <Grid className={style.h1} style={{ color: "black", fontWeight: "700", fontSize: "3.4rem", marginLeft: "60%" }}><u>Services</u></Grid>
                        
                    </Grid>
                </Grid>


                <Grid container lg={12} sm={12} direction="row" justifyContent="center" alignItems="center" spacing={10}
                    style={{ padding: "5%" }} >
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
                                <Button size="medium" color="primary" style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹50,000
                                </Button>
                                <Button size="medium" color="primary" style={{ backgroundColor: "#ffeb3b"}}className={`${style.button}`}>
                                    Learn More Info.
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹60,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹80,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹90,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹1,00,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹30,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img7}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Andaman Island
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹50,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img8}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bali
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹55,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img9}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Dubai
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹1,20,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img10}
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
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹1,00,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img11}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Japan
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹70,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
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
                                    img src={img12}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bangkok
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Share
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Book ₹45,000
                                </Button>
                                <Button size="medium" color="primary"style={{ backgroundColor: "#ffeb3b"}} className={`${style.button}`}>
                                    Learn More Info.
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

               

            </Grid>

            <Grid item lg={12}>
                 <Footer />
            </Grid>
        </Grid> 
        
    );
}

export default Services;
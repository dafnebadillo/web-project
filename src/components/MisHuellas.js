import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './NavBar'
import Grid from './Grid'
import Footer from './Footer'

//changes to imports 
import ImgHuella from './huella.jpg'
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import HttpIcon from '@material-ui/icons/Http';
import {HiOutlineFingerPrint} from "react-icons/hi";
import {HiFingerPrint} from "react-icons/hi";
import {GiFingerPrint} from "react-icons/gi";
import {HiHand} from "react-icons/hi";
import {IoIosFingerPrint} from "react-icons/io";
import {RiFingerprintFill} from "react-icons/ri";




const theme = createMuiTheme({
    ImgHuella: {
        height:"125", 
        width:"125",
    },
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function MisHuellas() {
  const classes = styles(); 

  return (
    <div className="MisHuellas">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Mis Huellas
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<HiFingerPrint style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Huella 1" btnTitle="Show me More" />
          <Grid icon={<HiOutlineFingerPrint style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Huella 2" btnTitle="Show me More"/>
          <Grid icon={<GiFingerPrint style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Huella 3" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<HiHand style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Huella 4" btnTitle="Show me More"/>
          <Grid icon={<IoIosFingerPrint style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Huella 5" btnTitle="Show me More"/>
          <Grid icon={<RiFingerprintFill style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Huella 6" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MisHuellas;
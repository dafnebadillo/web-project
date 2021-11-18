import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './NavBar'
import Grid from './Grid'
import Footer from './Footer'
import {Link} from 'react-router-dom';

//import iconos
import {BiScan} from "react-icons/bi";
import {FaEdit} from "react-icons/fa";


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

function HomePage() {
  const classes = styles(); 

  return (
    <div className="HomePage">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Home Page
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Link to="/SubirHuellas">
          <Grid icon={<BiScan style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="" btnTitle="Sube una Huella" />
          </Link>
          <Link to="/MisHuellas">
          <Grid icon={<FaEdit style={{fill: "#D0372D", height:"125", width:"125"}}/>}  title="" btnTitle="Edición de Huellas"/>
          </Link>
            </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
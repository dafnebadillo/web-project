import React from 'react'
import CustomBtn from './CustomBtn'
import homeimg from '../components/homepage.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from 'react-router-dom';
import TutorialsList from "./tutorials-list.component";
import Edit from './Edit';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    homeimg: {
        width: "45%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> 
                <Link to="/HomePage">
                    <img src={homeimg} className={classes.homeimg}/> 
                </Link>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/TutorialsList">
                    Mis Huellas
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/Edit">
                    Editar Huella
                    </Link>
                </Typography>
                <Link to="/SignIn">
                    <CustomBtn txt="Cerrar Sesión"/>
                </Link>
            </Toolbar>
    )
}

export default NavBar
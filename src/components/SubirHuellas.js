import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './NavBar'
import Grid from './Grid'
import Footer from './Footer'
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {storage} from './firebase/firebase'

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
function SubirHuellas(){
    const classes = styles();
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  } 

  return (
    <div className="SubirHuellas">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Sube una Huella
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleChange} />
                <button disabled={!file}>upload to firebase</button>
            </form>
            {url}
            <img src={url} alt="" />
        </div>   
      </ThemeProvider>
    </div>
  );
}
export default SubirHuellas;
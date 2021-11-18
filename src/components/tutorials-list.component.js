import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import Tutorial from "./tutorial.component";
import NavBar from './NavBar'
import {Typography} from '@material-ui/core'; 



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

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        fileurl: data.fileurl
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() {
    
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="MisHuellas">
      <ThemeProvider theme={theme}>
        <NavBar/>
      <div className="list row">
        <div className="col-md-6">
          <h4>Mis Huellas</h4>
          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
      <div>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
    );
  }
}
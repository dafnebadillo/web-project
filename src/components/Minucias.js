import React, { useState } from 'react';
import './App.css';
import Slider from './Slider'
import SidebarItem from './Sidebaritem'
import {Link} from 'react-router-dom';
import CustomBtn from './CustomBtn'
import ReactDOM from 'react-dom'


const DEFAULT_OPTIONS = [
  {
    name: 'Editar'
  },
  {
    name: 'Aceptar'
  },
  {
    name: 'Cancelar'
  },
  {
    name: 'Refrescar'
  }
]

class Application extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { x: 0, y: 0 };
    }
    
    _onMouseMove(e) {
      const position = this.refs.elem.getDOMNode().getBoundingClientRect();
      console.log(position, e.nativeEvent.offsetX, e.screenX);
  
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
    
    render() {
      const { x, y } = this.state;
      return <div ref="elem" className="container">
        <div>
          <img onMouseMove={this._onMouseMove.bind(this)} width="200" height="200" src="https://yt3.ggpht.com/-7zFDHK5X45w/AAAAAAAAAAI/AAAAAAAAAAA/QJfHeLTEZwE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
        </div>
        <h1>Mouse coordinates: { x } { y }</h1>
      </div>;
    }
  }
  

function Minucias() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }

  console.log(getImageStyle())

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()} />
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          )
        })}
        <Link to="/MisHuellas">
        <CustomBtn txt="Guardar Cambios"/>
      </Link>
      <Link to="/HomePage">
        <CustomBtn txt="Pagina Principal"/>
      </Link>
      </div>
    </div>
  )
}
ReactDOM.render(<Application />, document.getElementById('app'));
export default Minucias;
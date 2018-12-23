import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

import './App.css';

import Title from './components/Title';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="Header-background">
            <div className="container">
              <div className="Header-main">
              <Title></Title>
                <h2></h2>
                <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                <img className="Header-illustration" src={process.env.PUBLIC_URL + '/img/lugares.png'} />
              </div>
              <div>
              <ul>
                <Card className="HeaderBenefit">
                  <CardText>
                    <div className="row">
                      <div className="HeaderBenefitImage" style={{ 'backgroundColor' : redA400 }}>
                        <img src={process.env.PUBLIC_URL + '/img/heart2.png'} />
                      </div>
                      <div className="HeaderBenefitContent">
                      <h3>Calificaciones con emociones</h3>
                      <p>Califica tus lugares con experiencias, no con números</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="HeaderBenefit">
                  <CardText>
                    <div className="row">
                      <div className="HeaderBenefitImage" style={{ 'backgroundColor' : lightBlueA400 }}>
                        <img src={process.env.PUBLIC_URL + '/img/noInternet.png'} />
                      </div>
                      <div className="HeaderBenefitContent">
                      <h3>Calificaciones con emociones</h3>
                      <p>Califica tus lugares con experiencias, no con números</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="HeaderBenefit">
                  <CardText>
                    <div className="row">
                      <div className="HeaderBenefitImage" style={{ 'backgroundColor' : amberA400 }}>
                        <img src={process.env.PUBLIC_URL + '/img/star.png'} />
                      </div>
                      <div className="HeaderBenefitContent">
                      <h3>Calificaciones con emociones</h3>
                      <p>Califica tus lugares con experiencias, no con números</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </ul>
              </div>
            </div>
          </div>
          <div style={{'backgroundColor' : indigo400, 'padding' : '50px'}}>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

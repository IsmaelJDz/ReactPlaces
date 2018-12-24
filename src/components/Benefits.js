import React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

class Benefits extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Benefits;

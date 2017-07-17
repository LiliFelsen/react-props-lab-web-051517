// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors:</p>
        <ul>
          <li>{this.props.colors}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

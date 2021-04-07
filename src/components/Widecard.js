import React, { Component } from 'react'

class Widecard extends Component {
  dateText = this.props.from ? `${this.props.from} - ${this.props.to}` : this.props.to;
  render() {
    return (
      <div className="widecard">
        <div className="compdet">
          <h3>{this.props.title}</h3>
          <h4 className="secondtext">{this.props.where}</h4>
          <h4 className="secondtext">{this.dateText}</h4>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Widecard
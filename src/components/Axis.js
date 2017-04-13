import React, { Component }from 'react';
import * as d3 from 'd3'

class Axis extends Component {
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    let axisOptions = this.props.axisType === 'x' ? 
      {
        transform: 'translate(0, 450)',
        direction: d3.axisBottom
      } : {
        transform: 'translate(50, 0)',
        direction: d3.axisLeft
      }
    d3.select(this.g)
      .attr("class", `${this.props.axisType}-axis`)
      .attr("transform", axisOptions.transform)
      .call(axisOptions.direction(this.props.scale)
              .tickFormat(d3.format('')))
  }

  render() {
    return (
      <g ref={g => this.g = g}/>
    )
  }
} 

export default Axis;

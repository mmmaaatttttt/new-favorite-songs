import React, { Component }from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import './Axis.css';
import { axisFormat } from '../helpers/axisHelpers';

function mapStateToProps(state, props) {
  let axisLabel = props.axisType === 'x' ? 
    state.xAxisLabel : 
    state.yAxisLabel;

  return {
    width: state.scatterplotWidth,
    height: state.scatterplotHeight,
    padding: state.scatterplotPadding,
    axisLabel
  }
}

class Axis extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    let axisOptions = this.props.axisType === 'x' ? 
      {
        tickSize: this.props.height - this.props.padding.top - this.props.padding.bottom,
        transform: `translate(0, ${this.props.height - this.props.padding.top})`,
        direction: d3.axisBottom
      } : {
        tickSize: this.props.width - this.props.padding.left - this.props.padding.right,
        transform: `translate(${this.props.padding.left}, 0)`,
        direction: d3.axisLeft
      }
    d3.select(this.g)
      .attr("class", `${this.props.axisType}-axis`)
      .attr("transform", axisOptions.transform)
      .call(axisOptions.direction(this.props.scale)
        .tickSize(-axisOptions.tickSize)
        .tickFormat(d3.format(''))
      )
  }

  render() {
    let transformVal = this.props.axisType === 'x' ?
      `translate(${this.props.width / 2}, 
      ${this.props.padding.top / 2})` :
      `rotate(-90) 
      translate(${-this.props.height / 2}, 
      ${-this.props.padding.left / 2})`;
    return (
      <g ref={g => this.g = g}>
        <text 
          className="axis-label"
          transform={transformVal}
        >
          {axisFormat(this.props.axisLabel)}
        </text>
      </g>
    )
  }
} 

export default connect(mapStateToProps, null)(Axis);

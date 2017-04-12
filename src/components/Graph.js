import React, { Component }from 'react';
import GraphPointWrapper from './GraphPointWrapper';
import * as d3 from 'd3'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.xScale = this.xScale.bind(this);
    this.yScale = this.yScale.bind(this);
  }
  
  xScale() {
    const xMin = d3.min(
      this.props.tracks, d => d.audio_features[this.props.xDataLabel]
    )
    const xMax = d3.max(
      this.props.tracks, d => d.audio_features[this.props.xDataLabel]
    )
    return d3
            .scaleLinear()
            .domain([xMin, xMax])
            .range([0, this.props.width]);
  }

  yScale() {
    const yMin = d3.min(
      this.props.tracks, d => d.audio_features[this.props.yDataLabel]
    )
    const yMax = d3.max(
      this.props.tracks, d => d.audio_features[this.props.yDataLabel]
    )
    return d3
            .scaleLinear()
            .domain([yMin, yMax])
            .range([this.props.height, 0]);
  }

  render() {
    return (
      <svg 
        width={this.props.width}
        height={this.props.height}>
        <GraphPointWrapper 
          tracks={this.props.tracks}
          xDataLabel={this.props.xDataLabel}
          yDataLabel={this.props.yDataLabel}
          xScale={this.xScale()}
          yScale={this.yScale()}
        />
      </svg>
    )
  }
}

export default Graph;

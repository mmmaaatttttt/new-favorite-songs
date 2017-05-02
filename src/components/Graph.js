import React, { Component }from 'react';
import { connect } from 'react-redux';
import GraphPointWrapper from './GraphPointWrapper';
import Axis from './Axis';
import * as d3 from 'd3';
import './Graph.css';

function mapStateToUserProps(state) {
  return {
    tracks: state.tracks,
    width: state.graphWidth,
    height: state.graphHeight,
    padding: state.graphPadding,
    xDataLabel: state.xAxisLabel,
    yDataLabel: state.yAxisLabel
  }
}

class Graph extends Component {

  render() {
    const xMin = d3.min(
      this.props.tracks, d => d.audio_features[this.props.xDataLabel]
    );
    const xMax = d3.max(
      this.props.tracks, d => d.audio_features[this.props.xDataLabel]
    );
    const yMin = d3.min(
      this.props.tracks, d => d.audio_features[this.props.yDataLabel]
    );
    const yMax = d3.max(
      this.props.tracks, d => d.audio_features[this.props.yDataLabel]
    );
    const xScale = d3
                    .scaleLinear()
                    .domain([xMin, xMax])
                    .range([
                      this.props.padding.left, 
                      this.props.width - this.props.padding.right
                    ]);
    const yScale = d3
                    .scaleLinear()
                    .domain([yMin, yMax])
                    .range([
                      this.props.height - this.props.padding.top, 
                      this.props.padding.bottom
                    ]);
    return (
      <svg 
        width={this.props.width}
        height={this.props.height}>
        <Axis scale={xScale} axisType='x'/>
        <Axis scale={yScale} axisType='y'/>
        <GraphPointWrapper 
          xDataLabel={this.props.xDataLabel}
          yDataLabel={this.props.yDataLabel}
          xScale={xScale}
          yScale={yScale}
        />
      </svg>
    )
  }
}

export default connect(mapStateToUserProps, null)(Graph);

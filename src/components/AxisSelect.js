import React, { Component }from 'react';
import { dispatchNewAxisLabel } from '../actions/graph';
import { connect } from 'react-redux';
import { axisFormat, trackKeys } from '../helpers/axisHelpers';

function mapStateToProps(state, props) {
  let axisLabel = props.axis === 'x' ? 
    state.xAxisLabel : 
    state.yAxisLabel;
  return { axisLabel }
}

class AxisSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatchNewAxisLabel(
      this.props.axis + 'AxisLabel', e.target.value
    );
  }

  render() {
    let options = trackKeys.sort().map((opt,i) => (
      <option key={i} value={opt}>{axisFormat(opt)}</option>
    ));
    return (
      <label>
        Change {this.props.axis}-axis:
        <select 
          value={this.props.axisLabel} 
          onChange={this.handleChange}
        >
          {options}
        </select>
      </label>
    )
  }
} 

export default connect(mapStateToProps, { dispatchNewAxisLabel })(AxisSelect);

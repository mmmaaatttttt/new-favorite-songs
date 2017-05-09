import React, { Component }from 'react';
import { setAxisLabel } from '../actions/graph';
import { connect } from 'react-redux';
import { axisFormat } from '../helpers/axisHelpers';

function mapStateToProps(state, props) {
  let axisLabel = props.axis === 'x' ? 
    state.xAxisLabel : 
    state.yAxisLabel;
  return { 
    trackKeys: state.trackKeys, 
    axisLabel 
  };
}

class AxisSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setAxisLabel(
      this.props.axis + 'AxisLabel', e.target.value
    );
  }

  render() {
    let options = this.props.trackKeys.sort().map((opt,i) => (
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

export default connect(mapStateToProps, { setAxisLabel })(AxisSelect);

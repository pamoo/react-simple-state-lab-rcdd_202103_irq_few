import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }


  render() {
    return (
@@ -19,3 +21,7 @@ export default class Matrix extends Component {
  }

}

Matrix.defaultProps = {
  values: Array(10).fill(Array(10).fill("#F00"))
}

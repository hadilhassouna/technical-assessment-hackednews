import React, { Component } from 'react';
// import { link } from 'react-router-dom';


class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.author}
          </td>
        </tr>
    );
  }
}

export default TableRow;
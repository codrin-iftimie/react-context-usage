import React from 'react';
import {FieldPlaceholder} from '../lib/Form';
import {implementLayout} from '../lib/Layout';

export class L1 extends React.Component {
  render() {
    return(
      <div>
        <div>
          <label>Title</label>
          <FieldPlaceholder fieldName="title" />
        </div>
        <div>
          <label>Description</label>
          <FieldPlaceholder fieldName="description" />
        </div>
      </div>
    )
  }
}

export default implementLayout(L1);

import React, { Component } from 'react';
import DataGridExp from '../../libs/components/forms/DataGridExp';
import { categoryStore } from '../../stores/categoryStore';

const columns = [
  { dataField: 'id', caption: 'Id', dataType: 'number', allowEditing: false },
  { dataField: 'name', caption: 'Name', dataType: 'string', validationRules: [
    { type: 'required' },
    { type: 'stringLength', min: 1, max: 100 }
  ]}
];

export class Categories extends Component {
  render() {
    return (
      <>
        <h1 className="display-4">Categories</h1>
        <DataGridExp columns={columns} store={categoryStore}/>
      </>
    );
  }
};

export default Categories;
import React from 'react';
import {MDBDataTable} from 'mdbreact';
import {connect} from "react-redux";

/*
 * See mdbreact API at https://mdbootstrap.com/docs/react/tables/datatables/
 */
const DatatablePage = (props) => {
  const {sequences} = props;
  sequences.map(s => {
    s['truncated'] = s.sequence.slice(0, 30) + '...'
  });

  const handleRowClick = (e) =>{
    console.log(e)

  }

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'sequenceName',
        sort: 'asc',
        searchable: true
      },
      {
        label: 'Description',
        field: 'sequenceDescription',
        sort: 'asc',
      },
      {
        label: 'Sequence',
        field: 'truncated',
        sort: 'asc',
      },
    ],
    rows: sequences,
    clickEvent: handleRowClick
  };

  return (
    <div className={'container'}>
      <MDBDataTable
        exportToCSV
        striped
        bordered
        hover
        data={data}
        sortRows={['sequenceName asc']}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sequences: state.rootReducer.sequences,
  }
};

export default connect(mapStateToProps)(DatatablePage)

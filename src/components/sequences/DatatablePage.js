import React from 'react';
import {MDBBtn, MDBContainer, MDBDataTable, MDBModal, MDBModalBody, MDBModalFooter} from 'mdbreact';
import {connect} from "react-redux";
import SequenceModal from "./SequenceModal";

/*
 * See mdbreact API at https://mdbootstrap.com/docs/react/tables/datatables/
 * https://stackblitz.com/edit/react-92kvrq?file=TablePage.js
 */
const data = {
  columns: [
    {
      label: 'Name',
      field: 'sequenceName',
      sort: 'asc',
      searchable: true,
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
};

class DatatablePage extends React.Component {
  state = {
    showPopup: false
  };

  toggle = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  showModal = (selectedSequence) => {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedSequence
    });
  };

  render() {
    const {sequences} = this.props;
    sequences.map(s => {
      s['truncated'] = s.sequence.length <= 30? s.sequence.slice(0, 30) : s.sequence.slice(0, 30) +'...';
      s['clickEvent'] = () => {
        this.showModal(s);
      };
      return s;
    });
    data['rows'] = sequences;
    return (
      <div>
        <MDBContainer >
          <MDBModal isOpen={this.state.showPopup} toggle={this.toggle}>
            <MDBModalBody>
              <SequenceModal data={this.state.selectedSequence}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBDataTable
            exportToCSV
            striped
            bordered
            hover
            data={data}
            sortRows={['sequenceName asc']}
          />
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sequences: state.rootReducer.sequences,
  }
};

export default connect(mapStateToProps)(DatatablePage)

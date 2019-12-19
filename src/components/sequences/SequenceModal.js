import React from 'react';

const SequenceModal = (props) => {
  return (
    <div className="container">
      <h2>{props.data.sequenceName}</h2>

      <div id="props.data.sequenceName" className="modal">
        <div className="modal-content">
          <p>{props.data.sequence}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close btn orange">Close</a>
        </div>
      </div>

    </div>
  )
}

export default SequenceModal;

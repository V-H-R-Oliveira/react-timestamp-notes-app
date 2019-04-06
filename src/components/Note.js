import React, { Component } from 'react';
import '../App.css';

export class Note extends Component 
{
  render() {
    const {title, body, timestamp, id} = this.props.note;

    return (
      <div className="card bg-warning" style={{width: "18rem"}}>
        <div className="card-header text-center bg-white text-dark mt-0 h-100">
            <h5 className="card-title h2">{title}<span className="float-right text-danger" 
            style={{cursor: 'pointer'}} 
            onClick={this.props.removeNote.bind(this, id)}>X</span></h5>
        </div>
        <div className="card-body text-justify">
            <p className="card-text h3">{body}</p>
        </div>
        <div className="bg-white text-dark card-footer text-center h3 mb-0">
          {timestamp}
        </div>
    </div>
    );
  }
}

export default Note;


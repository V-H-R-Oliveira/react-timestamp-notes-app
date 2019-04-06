import React, { Component } from 'react';
import Note from './Note';

export class NoteList extends Component 
{
  render() 
  {
    const {notes, removeNote} = this.props;
    return (
      <div>
      {
        notes.length === 0 ? <p className="text-danger text-center h3">Empty List</p> : 
        <section className="grid-output">
            {notes.map(note => <Note key={note.id} note={note} removeNote={removeNote} />)}
        </section>
      }
    </div>
    );
  }
}

export default NoteList;

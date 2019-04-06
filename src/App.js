import React, { Component } from 'react';
import Header from './components/layout/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {notes: []};
    this.onReceiveData = this.onReceiveData.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  onReceiveData = data => this.setState({notes: [...this.state.notes, data]});

  removeNote = id => this.setState({notes: [...this.state.notes.filter(note => note.id !== id)]});
  
  render() 
  {
    return (
      <div>
        <Header />
        <NoteForm onReceiveData={this.onReceiveData} />
        <br />
        <hr />
          <p className="text-center h1 text-info mb-5 mt-2">My notes:</p>
         <NoteList notes={this.state.notes} removeNote={this.removeNote} />
         <br />
         <Footer />
      </div>
    );
  }
}

export default App;

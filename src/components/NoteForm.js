import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';

export class NoteForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: uuid.v4(),
            title: '',
            body: '',
            timestamp: '',
            countTitle: 0,
            countBody: 0
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onKeyUpHandlerTitle = this.onKeyUpHandlerTitle.bind(this);
        this.onKeyUpHandlerBody = this.onKeyUpHandlerBody.bind(this);
    }

    onChangeHandler = e => this.setState({[e.target.name]: e.target.value, 
        timestamp: new Date().toLocaleString('pt-br')});
    

    onKeyUpHandlerTitle = e => e.target.value !== '' ? 
    this.setState({countTitle: e.target.value.length}) : this.setState({countTitle: 0});
    
    onKeyUpHandlerBody = e => e.target.value !== '' ? 
    this.setState({countBody: e.target.value.length}) : this.setState({countBody: 0});
    
    onSubmitHandler = e =>
    {
        e.preventDefault();
        this.props.onReceiveData(this.state);
        this.setState({title: '', body: '', 
        countBody: 0, countTitle: 0, timestamp: '', id: uuid.v4()});
    }

  render() 
  {
    return (
      <section>
        <form onSubmit={this.onSubmitHandler}>
        <div className="form-group">
            <label className="label" htmlFor="input">Note title:</label>
            <span className="word-counter" style={{lineHeight: 1.4}}>
                <input className="input" id="input" type="text" placeholder="Note title..." 
                name="title" maxLength="20" 
                onChange={this.onChangeHandler} 
                onKeyUp={this.onKeyUpHandlerTitle} autoFocus 
                autoComplete="off" value={this.state.title} required />
                <br />
                <span>{this.state.countTitle}</span>
            </span>
        </div>
        <div className="form-group">
            <label className="label" htmlFor="textarea">Note body:</label>
            <span className="word-counter">
                <textarea className="textarea" id="textarea" placeholder="Note body..." 
                name="body" 
                onChange={this.onChangeHandler} 
                onKeyUp={this.onKeyUpHandlerBody} autoComplete="off" 
                value={this.state.body} required></textarea>
                <br />
                {this.state.countBody}
            </span>
        </div>
        <br />
        <div className="form-group">
            <button className="btn" type="submit">Add timestamped note</button>
        </div>
        </form>
      </section>
    );
  }
}

export default NoteForm;

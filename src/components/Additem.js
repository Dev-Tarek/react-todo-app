import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Textfield from './layouts/Textfield';
import Button from './layouts/Button';

const style = {
    border: '1px solid grey',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 8,
    marginTop: 8,
    width: '100%',
    display: 'inline-flex',
}

export default class extends Component{
    state = {
        text: '',
    }

    handleInput = (value) => {
        this.setState({text: value});
    }

    handleAdd = () => {
        if(this.state.text.length>0)
            this.props.addFunc(this.state.text);
        this.setState({text: ''});
    }
    
    render(){
        return (
        <div style={style}>
            <Grid xs={11}>
                <Textfield name='Add new item' collector={this.handleInput} value={this.state.text}/>        
            </Grid>
            <Grid xs={1}>
                <Button text='test' click={this.handleAdd} />
            </Grid>
        </div>
        )
    }

}
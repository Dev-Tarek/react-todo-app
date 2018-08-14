import React, { Component } from 'react';
import './App.css';
import List from './components/Checklist';
import Grid from '@material-ui/core/Grid';
import Bar from './components/layouts/Bar';
import Tabs from './components/layouts/Tabs';
import Add from './components/Additem';

class App extends Component {
  state = {
    tab: 0,
    data: [
      'First task needs to be done',
      'Second task needs to be done',
      'Third task needs to be done',
    ]
  }

  tabChange = (tab) => {
    this.setState({
      tab: tab,
    })
  }

  addData = value => {
    let newData = [...this.state.data];
    newData.push(value);
    this.setState({data: newData});
  }

  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid md={3} />
          
          <Grid xs={12} sm={12} md={6}>
          
            <Bar title='To Do List' color='primary'/>
            <Tabs change = { this.tabChange } />
            <Add addFunc={this.addData} />
            <List data={this.state.data} tab={this.state.tab} />

          </Grid>
          
          <Grid md={3} />
        </Grid>
      </div>
    );
  }
}

export default App;

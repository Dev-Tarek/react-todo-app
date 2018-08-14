import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default class CheckboxList extends React.Component {
  state = {
    checked: [0],
    styles: {
      listContainer: {
        width: '100%',
        // maxWidth: 660,
      },
      listText: {
        fontSize: 17,
      },
      listItem: {
        border: '1px solid grey',
        backgroundColor: 'rgba(255,255,255,0.9)',
        // boxShadow: '0 2px 2px 0px black',
        borderRadius: 8,
        marginBottom: 4,
      },
      listItemDone: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        textDecoration: 'line-through',
        border: '1px solid grey',
        borderRadius: 8,
        marginBottom: 4,
      }
    }
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  deleteHandler = (id) => {
    const data = this.props.data;
    delete (data[id]);
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div >
        <List style={this.state.styles.listContainer}>
          {this.props.data.map((value, index) => {
            let checked = this.state.checked.indexOf(value) !== -1;
            if(this.props.tab === 1 && checked) return null;
            if(this.props.tab === 2 && !checked) return null;
            return <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
              style={checked ? this.state.styles.listItemDone : this.state.styles.listItem}
            >
              <Checkbox
                checked={checked}
                tabIndex={-1}
                disableRipple
                color='primary'
              />
              <ListItemText primary={value} style={this.state.styles.listText} />
              <ListItemSecondaryAction>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={this.deleteHandler.bind(this, index)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          })}
        </List>
      </div>
    );
  }
}

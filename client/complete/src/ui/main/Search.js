import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { connect } from 'react-redux';
import { updateItems } from '../../redux/actions/itemsActions';

class Search extends Component {
    getStyles() {
        return {
            root: {
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3',
                textAlign: 'center',
                padding: '0 1em 1em',
                margin: '60px 16px',
                '@media (min-width: 400px)': {
                    width: '400px',
                    margin: '60px auto'
                }
            },
            textField: {
                fontSize: '.9em'
            },
            lable: {
                fontWeight: '400',
                fontSize: '1em',
            },
            button: {
                width: '100px',
                height: '35px',
                marginTop: '30px',
                marginLeft: '10px',
                marginBottom: '15px',
            },
            a: {
                fontSize: '.8em',
                textDecoration: 'none',
                color: 'gray',
                ':hover': {
                    color: '#00bcd4'
                }
            }
        };
    }

    handleClick(e) {
        e.preventDefault();
        let keywords = this.refs.keywords.getValue();
        console.log(sessionStorage.getItem('items'));
        const items = JSON.parse(sessionStorage.getItem('items'));
        let showItems = [];
        console.log(items);
        // showItems = items.filter((item) => {
        //     return item.service.indexOf(keywords)!==-1
        // });
        this.props.updateItems(showItems);
    }


    render() {
        let styles = this.getStyles();
        return (
            <div>
                <TextField name={"keywords"} ref={"keywords"} style={styles.textField}/>
                <RaisedButton style={{marginLeft:"15px", width: "80px",}} onClick={this.handleClick.bind(this)}>search</RaisedButton>
            </div>
        )
    }
}

Search.propTypes = {
    updateItems: React.PropTypes.func.isRequired
};

export default connect(null, { updateItems })(Radium(Search));

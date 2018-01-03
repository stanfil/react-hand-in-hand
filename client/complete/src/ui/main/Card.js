import React, { Component } from 'react';
import { Link } from 'react-router';
import Chip from 'material-ui/Chip';
import Radium from 'radium';

class Card extends Component {
    getStyles() {
        return {
            root: {
                marginLeft: "50px",
            },
            chip: {
                width: "100px"
            }
        };
    }

    handleClick(e){
        e.preventDefault();

    }

    handleDelete(e) {
        e.preventDefault();

    }

    render() {
        const { item } = this.props;
        let styles = this.getStyles();
        return (
            <div style={styles.root}>
                <Chip style={styles.chip} backgroundColor={"#64c0f6"} onClick={this.handleClick.bind(this)} onRequestDelete={this.handleDelete.bind(this)}>
                    {item.service}
                </Chip>
            </div>
        );
    }
}

export default Radium(Card);

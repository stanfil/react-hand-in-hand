import React, { Component } from 'react';
import Radium from 'radium';
import Card from './Card';
import { connect } from 'react-redux';

class Cards extends Component{
    render() {
        let styles = {
            root: {
                width: '800px',
                minHeight: '400px',
                margin: '50px auto',
                paddingTop: '6rem',
                paddingBottom: '6rem',
                display: 'flex',
                flexWrap: 'wrap',
                border: "solid 1px #00bcd4"
            }
        };
        return (
            <div style={styles.root}>
                { this.props.items.map((item, i) => <Card key={i} item={item} />)}
            </div>
        )
    }
}

// Cards.propTypes = {
//     items: React.PropTypes.array.isRequired
// };


function mapStateToProps(state) {
    return {
        items: state.items
    };
}


export default connect(mapStateToProps)(Radium(Cards));
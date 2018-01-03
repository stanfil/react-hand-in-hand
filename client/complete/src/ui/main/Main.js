import React, { Component }  from 'react';
import Radium, { StyleRoot } from 'radium';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Search from './Search';
import Cards from './Cards';

class Main extends Component {
    // getChildContext() {
    //     return { muiTheme: getMuiTheme() };
    // }

    getStyles() {
        const styles = {
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '47px',
            }
        };
        return styles;
    }

    render() {
        const styles = this.getStyles();
        return (
            <StyleRoot>
                <div style={styles.root}>
                    <Search />
                    <Cards />
                </div>
            </StyleRoot>
        )
    }
}

// Main.childContextTypes = {
//     muiTheme: React.PropTypes.object.isRequired,
// };


export default Radium(Main);
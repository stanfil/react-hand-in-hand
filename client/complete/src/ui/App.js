import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
    getChildContext() {
        return { muiTheme: getMuiTheme() };
    }

    getStyles() {
        const styles = {
            root: {
                paddingTop: '47px',
                minHeight: 400,
            }
        };
        return styles;
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.root}>
                <RaisedButton label='React-hand-in-hand' primary={true}/>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
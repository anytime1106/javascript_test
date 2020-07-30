const React = require('react');
const { PureComponent } = React;

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    // shouldComponentUpdate(nextProps, nextState, nextcontext) {
    //     if(this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        
        this.setState({
            array: [...this.state.array, 1],
        });
    }

    render() {
        console.log('rendering', this.state);
        return (
            <div>
                <button onClick = { this.onClick }>click</button>
            </div>
        )
    }
}

export default Test;
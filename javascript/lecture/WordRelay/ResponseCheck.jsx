import React, { Component, Fragment } from 'react';
class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: 'start to click',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if ( state === 'waiting' ) {
            this.setState({
                state: 'ready',
                message: 'click when the screen is green',
            });

            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: 'now click',
                });
                this.startTime = new Date();
            }, 
            Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') { //성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: 'too fast, click when the screen is green',
            });

        } else if (state === 'now') {   //반응속도 체크
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: 'click when the screen is green',
                    result: [...prevState.result, this.endTime - this.startTime],
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result: [],
        });
    };

    renderAverage = () => {
        const {result} = this.state;
        return result.length === 0
                ? null
                :<>
                    <div>average time : { result.reduce((a, c) => a + c) / result.length }ms</div>
                    <button onClick={this.onReset}>reset</button>
                </>
    };

    render() {
        const { state, message } = this.state;
        return(
            <>
                <div 
                id="screen"
                className={ state }
                onClick={ this.onClickScreen }>
                    { message }
                </div>
                { this.renderAverage() }
            </>
        );
    }
}

const ResponseCheck = () => {
    state = {
        state: 'waiting',
        message: 'start to click',
        result: [],
    };

    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('start to click');
    const [result, setResult] = useState('[]]');

    const timeout = useRef(null);
    const startTime = useRef('');
    const endTime = useRef('');

    onClickScreen = () => {
        if ( state === 'waiting' ) {

            setState('ready');
            setMessage('click when the screen is green');

            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('now click');
                startTime.current = new Date();
            },
            Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') { //성급하게 클릭

            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('too fast, click when the screen is green');

        } else if (state === 'now') {   //반응속도 체크
            endTime.current = new Date();
 
            setState('waiting');
            setMessage('click when the screen is green');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            });
        }
    };

    onReset = () => {
        setResult([]);
    };

    renderAverage = () => {
        return result.length === 0
                ? null
                :<>
                    <div>average time : { result.reduce((a, c) => a + c) / result.length }ms</div>
                    <button onClick={onReset}>reset</button>
                </>
    };

    return(
        <>
            <div 
            id="screen"
            className={ state }
            onClick={ onClickScreen }>
                { message }
            </div>
            { renderAverage() }
        </>
    );
    
}

export default ResponseCheck;
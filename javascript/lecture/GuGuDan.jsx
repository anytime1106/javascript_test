const React = require('react');
const { Component } = React;


const GuGuDan = () => {
    const [first, setFirst]  = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond]  = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue]  = React.useState('');
    const [result, setResult]  = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };    

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(first + ' X ' + second + ' = ' + value + '정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }
    
    return (
        <React.Fragment>
            <div>{ first } 곱하기 { second }는?</div>
            <form onSubmit={  } >
                <input ref ={ inputRef } type="number" value={  } onChange={  } />
                    <button>입력!</button>
            </form>
            <div id="result">{ result }</div>
        </React.Fragment>
    );
}

module.exports = GuGuDan;
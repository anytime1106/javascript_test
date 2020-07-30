const React = require('react');
const {useEffect, useRef} = React;

function TextInput({ inputRef }){                  // 1. TextInput 컴포넌트는 inputRef 속성값을 input 요소의 ref 속성값으로 넣음
    return (
        <div>
            <input type="text" ref={inputRef} />  
            <button>저장</button>                 
        </div>
    );
}
 
const Text = () =>{
    function Form() {
        const inputRef = useRef();
        useEffect(() => {
            inputRef.current.focus();                  
        }, []);
    
        return (
            <div>
                <TextInput inputRef={ inputRef } />     {/* 2. 부모 컴포넌트 입장에서 손자 요소에 ref 속성값을 넣는 형태 => TextInput 컴포넌트 내부 구조를 알아야하므로 좋지 않은 방법 */}
                <button onClick={ () => inputRef.current.focus() }>텍스트로 이동</button>
            </div>
        );
    }

    return (
        <>
            <Form />
        </>
    );
}

module.exports = Text;

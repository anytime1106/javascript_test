const React = require('react');
const {useState, useCallback} = React;

// const Test = () => {

//     function Form() {
//         const INITIAL_TEXT = "안녕하세요";
//         const [text, setText] = useState(INITIAL_TEXT);
//         const [showText, setShowText] = useState(true);
//         console.log("rendering...");
//             return (
//             <div>
//                 { showText && (
//                     <input 
//                         type="text"
//                         ref={ref => ref && setText(INITIAL_TEXT)}   // 2. ref 속성값으로 입력한 함수는 해당 요소가 제거되거나 생성될 때마다 호출됨
//                         value={text}
//                         onChange={e => setText(e.target.value)}
//                     />
//                 )}
//                 {/* // 보이기 / 가리기 버튼을 누르면 input 요소가 제거되거나 생성됨 */}
//                 <button onClick={() => setShowText(!showText)}>보이기 / 가리기</button>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Form />
//         </>
//     );
// };

const Test = () => {
    let index = 1;
    function Form() {
        const INITIAL_TEXT = "안녕하세요";
        const [text, setText] = useState(INITIAL_TEXT);
        const [showText, setShowText] = useState(true);
        const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);
        console.log("rendering...");
            return (
            <div>
                { showText && (
                    <input 
                        type="text"
                        ref={setInitialText}   // 2. ref 속성값으로 입력한 함수는 해당 요소가 제거되거나 생성될 때마다 호출됨
                        value={text}
                        onChange={e => {
                            setText(e.target.value);
                            index += 1;
                            console.log(index);
                        }}
                    />
                )}
                {/* // 보이기 / 가리기 버튼을 누르면 input 요소가 제거되거나 생성됨 */}
                <button onClick={() => setShowText(!showText)}>보이기 / 가리기</button>
            </div>
        );
    }

    return (
        <>
            <Form />
            <div>{index}</div>
        </>
    );
};

module.exports = Test;
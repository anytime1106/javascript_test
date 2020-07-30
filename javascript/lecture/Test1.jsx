//import React, { useState, useRef, useEffect } from 'react';

// const UserContext = React.createContext();
// const user = { name: 'mike', age: 23 };

// function ParentComponent() {                // 1. 부모 컴포넌트에서는 Provider 컴포넌트를 통해서 데이터를 전달
//     return (
//         <UserContext.Provider value={user}>
//             <ChildComponent />
//         </UserContext.Provider>
//     );
// }

// function ChildComponent() {                 
//     // 2. 자식 컴포넌트에서는 Consumer 컴포넌트를 통해서 데이터를 사용 => 이 방식은 Consumer 컴포넌트 안쪽에서만 컨텍스트 데이터에 접근할 수 있다는 한계가 존재 => 3번 영역에서 컨텍스트 데이터를 사용하기 위해서는 복잡한 방법 필요
//     // ......                               // 3
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {user => (
//                     <>
//                         <p>{ `name is ${user.name}` }</p>
//                         <p>{ `age is ${user.age}` }</p>
//                     </>
//                 )}
//             </UserContext.Consumer>
//         </div>
//     );
// }

// function Profile() {
//     const [age, setAge] = useState(20);
//     const prevAgeRef = useRef(20);          // 1. age의 이전 상탯값을 저장하기 위해 useRef 훅을 사용
//     useEffect(() => {                       // 2. age 값이 변경되면 그 값을 prevAgeRef에 저장
//         prevAgeRef.current = age;
//     }, [age]
//     );
//     const prevAge = prevAgeRef.current;     // 3. age 이전 상탯값ㅇ르 이용
//     const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
//     return (
//         <div>
//             <p>{ `age ${age} is ${text} than age ${prevAge}` }</p>
//             <button 
//                 onClick={() => {
//                     const age = Math.floor(Math.random() * 50 +1);
//                     setAge(age);            // 4. age가 변경돼서 다시 렌더링할 때 3의 prevAge는 age의 이전 상탯값ㅇ르 나타냄. 렌덩링이 끝나면 prevAgeRef는 age의 최신 상탯값으로 변경 됨
//                 }}
//             >
//                 나이 변경
//             </button>
//         </div>
//     );
// }

// import React, { useMemo } from 'react';
// import { runExpensivejob } from './util';

// function MyComponent({ v1, v2 }) {
//     const value = useMemo(() => runExpensivejob(v1, v2), [v1, v2]);
//     return <p>{ `value is ${value}` }</p>
// }

// import React, { useState } from 'react';
// import { saveToServer } from './api';
// import UserEdit from './UserEdit';

// function Profile() {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState(0);
//     const onSave = useCallback(() => (saveToServer(name, age), [name, age]), [name, age]);
//     return (
//         <div>
//             <p>{ `name is ${name}` }</p>
//             <p>{ `age is ${age}` }</p>
//             <UserEdit 
//                 onSave={onSave}
//                 setName={setName}
//                 setAge={setAge}
//             />
//         </div>
//     );
// }

// import React, { useReducer } from 'react';

// const INITIAL_STATE = { name: 'empty', age: 0 };
// function reducer(state, action) {
//     switch (action.type) {
//         case 'setName':
//             return { ...state, name: action.name };
//         case 'setAge':
//             return { ...state, age: action.age };
//         default:
//             return state;
//     }
// }

// function Profile() {
//     const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//     return (
//         <div>
//             <p>{ `name is ${state.name}` }</p>
//             <p>{ `age is ${state.age}` }</p>
//             <input 
//                 type="text"
//                 value={state.name}
//                 onChange={e => dispatch({ type: 'setName', name: e.currentTarget.value })}
//             />
//             <input 
//                 type="number"
//                 value={state.age}
//                 onChange={e => dispatch({ type: 'setAge', age: e.currentTarget.value })}
//             />
//         </div>
//     );
// }

// ...
// export const ProfileDispatch = React.createContext(null);           // dispatch 함수를 전달해 주는 컨텍스트 객체 생성
// // ...
// function Profile() {
//     const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//     return (
//         <div>
//             <p>{ `name is ${name}` }</p>
//             <p>{ `age is ${age}` }</p>
//             <ProfileDispatch.Provider value={dispatch}>             // Provider를 통해 dispatch 함수를 데이터로 전달 => SomeComponent 하위에 있는 모든 컴포넌트에서는 컨텍스트를 통해서 dispatch 함수를 호출할 수 있음
//                 <SomeComponent />
//             </ProfileDispatch.Provider>
//         </div>
//     );
// }

import React, { useState, forwardRef, useImperativeHandle } from 'react';

function Profile(props, ref) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    useImperativeHandle(ref, () => ({
        addAge: value => setAge(age + value),
        getNameLength: () => name.length,
    }));

    return (
        <div>
            <p>{ `name is ${name}` }</p>
            <p>{ `age is ${age}` }</p>
            { /*.....*/ }
        </div>
    );
}

export default forwardRef(Profile);

function Parent() {
    const profileRef = useRef();
    const onClick = () => {
        if (profileRef.current) {
            console.log('current name length:', profileRef.current.getNameLength());
            profileRef.current.addAge(5);
        }
    };
    return (
        <div>
            <Profile ref={profileRef} />
            <button onClick={onClick}>add age 5</button>
        </div>
    );
}
import React,{useState} from 'react';


function Counter({name}) {
    const [number,setNumber] = useState(0);
    // 함수 2개
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber+1);
        console.log(number);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber-1);

    }

    return(
     <div>
         <h1>{name}</h1>
         <h1>{number}</h1>
         {/*onClick 이라는 이벤트 발생*/}
         <button onClick={onIncrease}>+1</button>
         {/*onIncrease() 형태로 {}안에 넣으면 렌더링 시 함수가 바로 실행되므로 함수 형태를 넣어주어야 한다.
            -> 이렇게 되면 console창에서 +1버튼을 클릭안해도 렌더링하면 +1이 나온다.*/}
         <button onClick={onDecrease}>-1</button>
     </div>
    );
}


export default Counter;
import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onReset = () => {
        setText('');
    };
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                {/*b:볼드체(글씨 굴게 강조)*/}
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
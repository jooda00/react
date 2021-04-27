import React from 'react';

function Wrapper({children}) {
    const style ={
        border: '2px solid black',
        padding: '16px',
        margin: '16px',
        textAlign: 'center'
    };
    return (
        <div style={style}>
            {/* children props렌더링 해줘야 Wrapper의 내부 컴포넌트(<Hello../>)가 보임 */}
            {children}
        </div>
    );
}


export default Wrapper;
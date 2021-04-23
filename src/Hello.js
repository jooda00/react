import React from 'react'

function Hello({color,name}) {
    return <div style = {{color}}>
        Hello {name}
    </div>
}


// App에서 Hello 컴포넌트 불러왔을 때, props값 지정 안하면 디폴트 값으로 아래 정보가 화면에 나오게 함
Hello.defaultProps = {
    name: 'none',
    color: 'gray'
}
export default Hello;
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>铁血丹心</h1>
        </div>)
    }
    //上面的结构其实经过了bable转译，会显示成如下的结构。jsx=>js对象=>DOM元素插入页面。
    // render( React.createElement (
    //     'div',
    //      null,
    //     React.createElement(
    //         "h1",
    //         { className: 'title' },
    //         "React 小书"
    //     )
    // )
    // )
}
//react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。
//之所以要把ReactDom抽离出来，是因为我们用react生成的对象描述的DOM不一定是要放在页面中，我们也可能放入canvas或者app中，所以分离出来比较好。react-native就是生成app的。
ReactDom.render(<Header />, document.getElementById('root'))
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class MyRender extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //以下两种方式都可以。变量或者表达式或者函数执行，在jsx中用括号包起来。

        // const word = 'is good';
        // return(<div>
        //     <h1>射雕{word} </h1>
        // </div>);

        //可以返回函数执行的结果
        // return(<div>
        //     <h1>射雕{(function(){return 'is good'})()}</h1>
        // </div>
        // );

        //可以返回jsx，可以设置返回条件，什么都不反，可以填写null或者‘’
        const isGood = true;
        return (<div>
            金庸先生走好，{isGood ? <h1>我喜欢笑傲江湖</h1> : <h1>我喜欢天龙八部</h1>}
        </div>)
    }
}
ReactDom.render(<MyRender />, document.getElementById('root'));
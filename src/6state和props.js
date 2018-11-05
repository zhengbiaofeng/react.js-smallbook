import React, {Component } from 'react';
import ReactDom from 'react-dom';

//state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。

//没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

//React.js 非常鼓励无状态组件，在 0.14 版本引入了函数式组件——一种定义不能使用 state 的组件，例如一个原来这样写的组件：

const HelloWorld = (props) =>{
    const sayHi = (event) =>{
        return alert('hello world');
    }
    return (<div onClick={sayHi}>hello world</div>)
}
ReactDom.render(<HelloWorld/>,document.getElementById('root'));
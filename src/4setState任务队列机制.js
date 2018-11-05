import React, { Component } from 'react';
import ReactDom from 'react-dom';


//isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。setState 方法由父类 Component 所提供.当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
            count: 0
        }
    }
    // handleClickOnTitle() {
    //     //setState它接受一个对象或者函数作为参数。
    //     console.log(this.state.isLiked);
    //     this.setState({
    //         isLiked: !this.state.isLiked
    //     })
    //     console.log(this.state.isLiked);
    //     //控制台输出两次都是false，这是因为当你调用 setState 的时候，React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。所以如果你想在 setState 之后使用新的 state 来做后续运算就做不到了。
    // }
    countAdd=()=>{
        this.setState((prevState)=>{
            return { count: 1 }
        })
      
        this.setState((prevState)=>{
            console.log(prevState);
            return { count: prevState.count + 1}
        })
        this.setState((prevState)=>{
            console.log(prevState);
            return { count: prevState.count + 1}
        })
        console.log(this.state.count);
//这里就用到了setState的第二种使用方式，他可以接受一个函数作为参数，react.js会把上一个setState的结果作为参数传入，然后你就可以在这里进行运算，返回一个对象作为新的state。
    }



    render() {
        // return (<h1 onClick={this.handleClickOnTitle.bind(this)}>{this.state.isLiked ? '喜欢' : '不喜欢'}</h1>)

        //上面我们进行了三次 setState，但是实际上组件只会重新渲染一次，而不是三次；这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 setState 都进行合并以后再重新渲染组件。因此下面的console.log()只会输出一次。
        console.log('我只会渲染一次');
        return(<h1 onClick={this.countAdd}>{this.state.count}</h1>)
    }


}
ReactDom.render(<Title />, document.getElementById('root'));
import React, {Component} from 'react';
import ReactDom from 'react-dom';



//props满足了组件的可配置性，通过props的控制，在不同的地方复用组件，可以展示不一样的内容

//你不能改变一个组件被渲染的时候传进来的 props。React.js 希望一个组件在输入确定的 props 的时候，能够输出确定的 UI 显示形态。如果 props 渲染过程中可以被修改，那么就会导致这个组件显示形态和行为变得不可预测，这样会可能会给组件使用者带来困惑。

//但这并不意味着由 props 决定的显示形态不能被修改。组件的使用者可以主动地通过重新渲染的方式把新的 props 传入组件当中，这样这个组件中由 props 决定的显示形态也会得到相应的改变。
class LikeButton extends Component{
    //方法二： React.js 也提供了一种方式 defaultProps，可以方便的做到默认配置。
    static defaultProps = {
        likedText:'取消',
        unlikedText:'点赞'
    }
    constructor(props){
        super(props);
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton = () =>{
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render(){
        //方法一:组件默认配置我们是通过 || 操作符来实现。
        // const likedText = this.props.likedText || '取消';
        // const unlikedText = this.props.unlikedText || '点赞';
        const likedText = this.props.likedText;
        const unlikedText = this.props.unlikedText;
        return (
            <button onClick={this.handleClickOnLikeButton}>{this.state.isLiked ? likedText : unlikedText}</button>
        )
    }
}

ReactDom.render(<LikeButton />,document.getElementById('root'));
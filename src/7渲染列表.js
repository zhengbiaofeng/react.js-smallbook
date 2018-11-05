import React, {Component} from 'react';
import ReactDom from 'react-dom';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

class Index extends Component{
    // render(){
    //     return (
    //         //如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。
    //         <div>
    //             {[
    //                 <span>React.js</span>,
    //                 <span>is </span>,
    //                 <span>good</span>
    //             ]}
    //         </div>
    //     )
    // }

    //知道这一点以后你就可以知道怎么用循环把元素渲染到页面上：循环上面用户数组里面的每一个用户，为每个用户数据构建一个 JSX，然后把 JSX 放到一个新的数组里面，再把新的数组插入 render 方法的 JSX 里面。看看代码怎么写：
    render(){
        const usersElements = [];
        for (let user of users) {
            usersElements.push(
                <div>
                    <div>姓名: {user.username}</div>
                    <div>年龄: {user.age}</div>
                    <div>性别: {user.gender}</div>
                    <hr/>
                </div>
            )
        }

        return(
            <div>{usersElements}</div>
        )
    }
}
ReactDom.render(<Index/>,document.getElementById('root'));
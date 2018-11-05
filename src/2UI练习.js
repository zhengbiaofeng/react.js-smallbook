import React, { Component } from 'react';
import ReactDom from 'react-dom';

// class RenderContent extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (<div>
//             <h1>{this.props.inner}</h1>
//         </div>
//         )
//     }
// }

// ReactDom.render(<RenderContent inner={'Hello World'} />, document.getElementById('root'));

//两种发昂发都可以
function renderContent(content) {
    ReactDom.render(<h1>{content}</h1>, document.getElementById('root'));
}
renderContent('Hello World');
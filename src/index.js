import React, { Component } from 'react';
import ReactDom from 'react-dom';



class Lesson extends Component {
    constructor(props) {
        super(props);
    };

    handleIndex = () => {
        console.log( this.props.indexs + ' - ' + this.props.lessons.title);
    };
    render() {
        return (
            <div onClick={this.handleIndex}>
                <h1>{this.props.lessons.title}</h1>
                <p>{this.props.lessons.description}</p>
            </div>
        )
    }
}

class LessonsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const lessons = [
            { title: 'Lesson 1: title', description: 'Lesson 1: description' },
            { title: 'Lesson 2: title', description: 'Lesson 2: description' },
            { title: 'Lesson 3: title', description: 'Lesson 3: description' },
            { title: 'Lesson 4: title', description: 'Lesson 4: description' }
        ]
        return (
            <div>
                {lessons.map((item, index) => <Lesson key={index} lessons={item} indexs={index} />)}
            </div>

        )
    }
}


ReactDom.render(<LessonsList />, document.getElementById('root'));
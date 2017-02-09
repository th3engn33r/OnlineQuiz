/*
This is main APP component. This will be base for all React happenings.
Other Components will be called, but Final App packed will be exported from here.
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions : [
				{
					id: 1,
					text: 'what is 1 + 1 ?',
					choices: [
						{
							id: 'a',
							text: '1'
						},
						{
							id: 'b',
							text: '2'
						},
						{
							id: 'c',
							text: '3'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'what is 1 + 2 ?',
					choices: [
						{
							id: 'a',
							text: '1'
						},
						{
							id: 'b',
							text: '2'
						},
						{
							id: 'c',
							text: '3'
						}
					],
					correct: 'c'
				},				{
					id: 3,
					text: 'what is 2 + 3 ?',
					choices: [
						{
							id: 'a',
							text: '5'
						},
						{
							id: 'b',
							text: '6'
						},
						{
							id: 'c',
							text: '7'
						}
					],
					correct: 'a'
				}
			],
			score: 0,
			current: 1
		}
	};

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox = <h2><center>Congratulations! Your Score is {this.state.score}</center></h2>;
		}
		else{
			var scorebox = <Scorebox {...this.state} />;
		}
		return(
			<div>
				<div>
					{scorebox}
					<hr />
				</div>
				<div>
					<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				</div>
			</div>
		)
	}

}

export default App
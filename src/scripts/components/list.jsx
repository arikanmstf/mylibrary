import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {

	render() {
		let list = this.props.list;

		return list ? (
			<div className="list">
					{ list.title }
			</div>
		) : null
	}
}

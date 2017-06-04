import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";
import { API } from "../common/config";
import storage from "../common/storage";

let s = new storage();

export default class List extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

  getListById(list_id) {
    axios.get(API.getListById,{
				params: {
					list_id: list_id,
					login_key: s.get("login_key")
				}
			})
		.then( response => this.setState({ list: response.data.response }))
  }

	componentDidMount() {
		this.getListById(this.state.listId);
	}

	render() {
		let list = this.state.list;

		return list ? (
			<div className="list">
					{ list.title }
			</div>
		) : null
	}
}

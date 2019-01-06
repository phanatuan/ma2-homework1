import React, { Component } from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';

export default class Search extends Component {
	render() {
		return (
			<div className='container'>
				<Form>
					<FormGroup row>
						<Col sm={12}>
							<Input type="text" name="search"
								id="search"
								placeholder="Search Movie"
								value={this.props.currentSearch}
								onChange={this.props.handleSearch} />
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}
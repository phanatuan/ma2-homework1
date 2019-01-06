import React, { Component } from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';


function Search(props) { 
	return (
		<div className='container'>
			<Form>
				<FormGroup row>
					<Col sm={12}>
						<Input type="text" name="search"
							id="search"
							placeholder="Search Movie"
							value =  {props.currentSearch}
							onChange={props.handleSearch} />
					</Col>
				</FormGroup>
			</Form>
		</div>
	);
}
		
export default Search;	
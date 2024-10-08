import React, { useState } from 'react';
import axios from 'axios';

export const PostCreate = () => {
	const [title, setTitle] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios.post('http://posts.com/posts', {
			title,
		});

		setTitle('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>{title}</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

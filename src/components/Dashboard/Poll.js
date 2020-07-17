import React from "react";
import { formatDate } from "../../apis/_DATA";

import "./poll.css";

class Poll extends React.Component {
	render() {
		const {
			author,
			id,
			optionOneText,
			optionTwoText,
			optionOneVotes,
			optionTwoVotes,

			timestamp,
			uid,
		} = this.props.question;
		const date = formatDate(timestamp);
		const total_votes = optionOneVotes.length + optionTwoVotes.length;
		console.log("__POLLS__", this.props.question);
		return (
			<div className="item-container">
				<img src="/avatar1.jpg" alt="img" className="question-author-avatar" />

				<div className="poll-container">
					<span className="author-name">{author}</span>
					<span className="poll-date">{date}</span>
					{total_votes !== 0 ? (
						<span className="votes">
							{total_votes}
							{total_votes > 1 ? <span> users</span> : <span> user</span>} voted
							for this poll
						</span>
					) : (
						<span className="votes">become the first one to vote</span>
					)}
				</div>
			</div>
		);
	}
}

export default Poll;

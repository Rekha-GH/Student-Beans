import React from 'react';
import Image from './children/image';
import LikeButton from './children/like_button';
import styles from './styles';
import User from './components/User';
import Comments from './components/Comments';
import Caption from './components/Caption';
import moment from 'moment';

const App = (props) => {
	const { data } = props;

	const formatToCurrency = amount => {
		return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(".00", ""); 
	}

	return (
		<main style={styles.main}>
			<div style={styles.image}>
				<Image data={data} />
			</div>
			<div style={styles.text} className="p-10">
				<User data={data} />
				<hr className="hr" />
				<Caption data={data} />
				<Comments data={data.edge_media_to_comment.edges} />
				<div className="footer">
					<div className="row">
						<div className="col-9">
							<span className="likes">{formatToCurrency(data.edge_media_preview_like.count)} likes</span> <br/>
							<span className="date">{moment(data.taken_at_timestamp).fromNow()}</span>
						</div>
						<div className="col-3">
							<LikeButton />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default App

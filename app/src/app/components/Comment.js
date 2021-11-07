
import UnlikedButton from '../children/like_button/children/unliked_icon';

const Comment = props => {
    const { data } = props;
    return (
        <div className="comment">
            <div className="row">
                <div className="col-10">
                    <span className="username">{data.owner.username}</span>
                    <span className="text">{data.text}</span>
                </div>
                <div className="col-2">
                    <UnlikedButton /></div>
            </div>
        </div>
    );
}

export default Comment;
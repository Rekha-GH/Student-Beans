
import Comment from "./Comment";

const Comments = props => {
    const { data } = props;
    return (
        <div className="comments">
            {
                data.map(node => <Comment key={node.id} data={node.node} />)
            }
        </div>  
    );
}

export default Comments;
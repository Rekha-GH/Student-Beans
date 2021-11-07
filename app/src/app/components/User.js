
import styles from '../styles';

const User = props => {
    const { data } = props;
    return (
        <div className="user">
            <div className="row">
                <div className="col-2">
                    <img className="profile_pic p-10" src={data.owner.profile_pic_url} />
                </div>
                <div className="col-10 p-10 text-start col-right">
                    <span className="username">{data.owner.username}</span> <br/>
                    <span className="location">{data.location.name}</span>
                </div>
            </div>
        </div>  
    );
}

export default User;
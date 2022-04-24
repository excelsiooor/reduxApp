import {connect} from 'react-redux';
import { incrementLikes, decrementLikes} from './redux/actions';

function Likes(props) {
    return (
        <div className="button-controls">
        <button onClick={props.onIncrementLikes}>👍{props.Likes}</button>
        <button onClick={props.onDecrementLikes}>👎</button>
        </div>
    )
};

function mapStateToProps (state) {
    const {likesReducer} = state;
    return {
        Likes: likesReducer.Likes
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
        return dispatch (incrementLikes());
        },
        onDecrementLikes: () => {
            return dispatch (decrementLikes());
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
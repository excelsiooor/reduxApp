import {connect} from 'react-redux';

function Likes(props) {
    console.log( 'render>', props);
    return (
        <div className="button-controls">
        <button onClick={props.onIncrementLikes}>❤ {props.Likes}</button>
        <button>Dislike</button>
        </div>
    )
};

function mapStateToProps (state) {
    console.log('mapStateToProps > ', state);
    return {
        Likes: state.Likes
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        }
    } 
}

        <button>Dislike</button>
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
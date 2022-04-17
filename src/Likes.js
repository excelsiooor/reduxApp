import {connect} from 'react-redux';

function Likes(props) {
    console.log(props);
    return (
        <div className="button-controls">
        <button>❤ {props.Likes}</button>
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

export default connect(mapStateToProps)(Likes);
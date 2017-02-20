/**
 * Created by RWang on 2016/7/25.
 */
var LikeButton = React.createClass({
    getInitialState : function(){
        return({liked:false});
    },
    handleChange : function(){
        this.setState({ liked : !this.state.liked});
    },
    render : function(){
        var text = this.state.liked ? 'liked' : 'haven\'t liked';
        return(
            <p onClick={this.handleChange}>
                You {text} this. Click it to toggle.
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);
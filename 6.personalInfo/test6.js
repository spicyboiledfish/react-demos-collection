/**
 * Created by RWang on 2016/7/25.
 */
var Avatar = React.createClass({
    render : function(){
        return(
            <div>
                <ProfilePic username={this.props.username}/>
                <ProfileLink username={this.props.username}/>
            </div>
        );
    }
});

var ProfilePic = React.createClass({
    render : function(){
        return(
            <img src={'http://graph.facebook.com/' + this.props.username + '/picture'}/>
        );

    }
});

var ProfileLink = React.createClass({
    render : function(){
        return(
            <a href={'http://www.facebook.com/' + this.props.username} style={{color:'red', fontSize:'20px'}}>{this.props.username}</a>
        );
    }
});

ReactDOM.render(
    <Avatar username='cocacola'/>,
    document.getElementById('example')
);
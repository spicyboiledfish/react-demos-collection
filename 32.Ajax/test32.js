/**
 * Created by RWang on 2016/8/9.
 */

var UserInfo = React.createClass({
   getInitialState:function(){
       return({
           username:'',
           isMarried:true,
           age:18
       });
   },
    componentDidMount:function(){
      $.get(this.props.source,function(info){
          var myInfo = info[0];
          if(this.isMounted()){
              this.setState({
                  username:myInfo.username,
                  isMarried:myInfo.isMarried,
                  age:myInfo.age
              });
          }
      }.bind(this));
    },
    render:function(){
        console.log(typeof(this.state.isMarried));
        return(
            <div>
                {this.state.username} is {this.state.age}, has him/her been married? <span>{this.state.isMarried==true?'yes':'no'}!</span>
            </div>
        );
    }
});


ReactDOM.render(
    <UserInfo source="info.json" />,
    document.getElementById('example')
);
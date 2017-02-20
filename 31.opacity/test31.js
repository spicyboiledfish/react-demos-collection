/**
 * Created by RWang on 2016/8/9.
 */

var Opacity = React.createClass({
    getInitialState:function(){
      return({
          opacity : 1.0
      });
    },
    componentDidMount:function(){
        this.timer = setInterval(function(){
            var my = this.state.opacity;
            my = my - 0.05;
            if( my <0.1 ){
                my = 1.0;
            }
            this.setState({
                opacity:my
            })
        }.bind(this),100);
    },
    render:function(){
        return(
            <div style={{opacity:this.state.opacity, color:'#f00'}}>
                <h1>Hello!{this.props.name}</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <Opacity name='World'/>,
    document.getElementById('example')
);
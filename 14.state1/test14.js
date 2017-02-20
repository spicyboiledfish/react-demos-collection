/**
 * Created by RWang on 2016/7/28.
 */
var ColorButton = React.createClass({
   getInitialState:function(){
        return({bColor:'green'});

   },
    handleChange:function(){
        this.setState({bColor: this.state.bColor == 'green' ? 'red' : 'green'});

    },
    render:function(){
        return(
            <button onClick={this.handleChange} style={{backgroundColor:this.state.bColor,color:'#fff'}}>Click</button>
        );

    }
});

ReactDOM.render(
    <ColorButton />,
    document.getElementById('example')
);
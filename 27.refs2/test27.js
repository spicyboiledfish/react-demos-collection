/**
 * Created by RWang on 2016/8/4.
 */

var App = React.createClass({
   getInitialState:function(){
      return({inputValue:''});
   },
    handleChange:function(){
        this.setState({inputValue: event.target.value});
    },
    clearInput:function(){
        this.setState({inputValue:''});
    },
    render:function(){
        return(
            <div>
                <p onClick={this.clearInput}>Click it to clear the value of the text input</p>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
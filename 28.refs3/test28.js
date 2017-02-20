/**
 * Created by RWang on 2016/8/5.
 */

var App = React.createClass({
   getInitialState:function(){
       return({inputValue:""});
   },
    handleChange:function(){
        this.setState({inputValue: event.target.value});
    },
    clearInput:function(){
        this.setState({inputValue:""},function(){
            {/*this.refs.myInput.getDOMNode().focus();*/}
            ReactDOM.findDOMNode(this.refs.myInput).focus();
        });
    },
    render:function(){
        return(
            <div>
                <div onClick={this.clearInput}>Click it to clear and focus the input </div>
                <input type="text" ref="myInput" onChange={this.handleChange} value={this.state.inputValue}/>
            </div>
        );
    }

});

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
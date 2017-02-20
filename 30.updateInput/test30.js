/**
 * Created by RWang on 2016/8/8.
 */

var Input = React.createClass({
    getInitialState:function(){
        return({value: 'Hello'});
    },
    handleChange:function(event){
        this.setState({value: event.target.value});
    },
    render:function(){
        var val = this.state.value;
        return(
            <div>
                <input type="text" value={val} onChange={this.handleChange} />
                <p>{val}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Input />,
    document.getElementById('example')
);
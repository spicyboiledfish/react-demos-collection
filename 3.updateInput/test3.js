/**
 * Created by RWang on 2016/7/22.
 */

var UpdateInput = React.createClass({

    getInitialState: function(){
        return ({value: 'Hello!'});
    },
    handleChange:function(event){
        this.setState({value: event.target.value.substr(0, 5)});
        {/* 这一块就是指的是截取用户输入字符串中的前五位，即限制字符数是5*/}
    },
    render:function(){
        var value = this.state.value;
        return (<input type="text" value={value} onChange={this.handleChange} />);
    }
});


ReactDOM.render(
    <UpdateInput />,
    document.getElementById('example')
);
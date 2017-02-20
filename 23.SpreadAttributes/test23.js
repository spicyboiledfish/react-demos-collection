/**
 * Created by RWang on 2016/8/3.
 */

var Component = React.createClass({

    render:function(){
        var props = { foo: 'default' };
        var component = <Component {...this.props} foo={'override'} />;
        console.log(component.props.foo);
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);
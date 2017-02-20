/**
 * Created by RWang on 2016/8/2.
 */
var AMixin = {
    log: function () {
        console.log('AMixin Log');
    }
};

var BMixin = {
    log: function () {
        console.log('BMixin Log');
    }
};

var Component = React.createClass({
    mixins: [AMixin,BMixin],
    render: function () {
        return (
            <div>Component</div>
        )
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('example')
);

{/*此程序将会报错，原因是在使用mixin中，除了生命周期方法可以重复以外，其他方法都不可以重复
   在这个程序中，使用了两次log方法，是不允许的
*/}
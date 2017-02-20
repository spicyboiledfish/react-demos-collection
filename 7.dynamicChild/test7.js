/**
 * Created by RWang on 2016/7/26.
 */

var ListItemWrapper = React.createClass({
    render: function() {
        return <li style={{listStyle:'none'}}>{this.props.data}</li>;
    }
});

var MyComponent = React.createClass({
    render: function() {
        var arr1=[
            {
                    id:'1',
                    name:'dss'
            },
            {
                    id:'2',
                    name:'dwwww'
            }
        ];
        return (
            <ul>
                {
                    arr1.map(function(item){
                         return <ListItemWrapper key={item.id} data={item.name}/>;
                     })
                }
            </ul>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);

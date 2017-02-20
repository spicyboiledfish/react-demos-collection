/**
 * Created by RWang on 2016/8/2.
 */

var SetIntervalMixin = {
    componentWillMount:function(){
        this.inter = [];
    },
    mySetInterval:function(){
        this.inter.push(setInterval.apply(undefined,arguments));
    },
    componentWillUnmount:function(){
        this.inter.map(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins:[SetIntervalMixin],
    getInitialState:function(){
        return({second:0});
    },
    componentDidMount:function(){
        this.mySetInterval(this.tick,1000);
    },
    tick:function(){
        this.setState({second:this.state.second+1});
    },
    render:function(){
        return(
            <div>
            Ha Ha {this.state.second},this is a Timerclock.
            </div>
        );
    }

});

ReactDOM.render(
    <TickTock />,
    document.getElementById('example')
);
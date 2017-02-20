/**
 * Created by RWang on 2016/8/10.
 */

var RepoList = React.createClass({
   getInitialState:function(){
       return({
           loading:true,
           error:null,
           data:null
       });
   },
    componentDidMount:function() {
        this.props.promise.then(
                value => this.setState({loading: false, data: value}),
                err   => this.setState({loading: false, error: err})
        );
    },

    render:function(){
        if(this.state.loading){
            return(
                <span>Loading...</span>
            );
        }
        else if(this.state.error !== null){
            return(
                <span>Error:{this.state.error.message}</span>
            );
        }
        else{
            var arr = [this.state.data.items];
            var arry = arr.map(function(item,index){
                return(
                    <li key={index}>
                        <a href={item.html_url}>{item.name}</a>({item.stargazers_count} stars) <br/>
                        {item.description}
                    </li>
                );
            });
            return(
                <main>
                    <h1>HI EVERYBODY</h1>
                    <ol>{arry}</ol>
                </main>
            );
        }
    }

});

ReactDOM.render(
    <RepoList promise={$.getJSON('test33.json')}/>,
    document.getElementById('example')
);
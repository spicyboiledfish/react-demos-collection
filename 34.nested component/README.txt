在这个案例中，注意：在传递数组的时候，每一个child（子组件）都必须要有一个key
render:function(){
                var arr = [];
                for(var i=0; i < 10; i++){
                    arr.push(
                            <SubMessage key={i}/>
                    );
                }
                return(
                        <div>
                            <h1 onClick={this.alertHahh}>你好！世界！！！</h1>
                            {arr}
                        </div>
                );
            }
另外，在render渲染的HTML中，如果有两个标签的话，需要用<div></div>在最外层进行包裹
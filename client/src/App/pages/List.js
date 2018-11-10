import React, { Component } from 'react';

class List extends Component {
  // Initialize the state 
  //初始化状态
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount  
  //在第一个安装中获取列表
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  //从Express应用程序检索项目列表
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found
        检查是否发现任何项目
        */}
        {list.length ? (
          <div>
            {/* Render the list of items
            渲染项目列表
            */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;

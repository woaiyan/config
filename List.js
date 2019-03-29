class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
  test(){
    console.log("test")
  }
  render(){
    return (
      <li key={this.props.id} className="itemContainer" onClick={this.props.onClick}>{this.props.name}</li>
    )
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lists:[
        {name:"name1",id:1},
        {name:"name2",id:2},
        {name:"name3",id:3}
      ]
    }
  }
  doClick(id){
    console.log("id",id);
  }
  render (){
    const doclick = function(id){
      console.log(id)
    }
   return (this.state.lists.map(item=>
           <ListItem name={item.name} id={item.id} onClick={() => doclick(item.id)}></ListItem>
           )) 
  }
}
  ReactDOM.render(
    <List></List>,
    document.getElementById('root')
  );


function App(){
  return(
    <div>
      <Student name="Aditya"/>
      <Student name="Rahul"/>
    </div>
  );
}

function Student(props){
  return <h2>Hello, [props.name]</h2>
}
export default App;
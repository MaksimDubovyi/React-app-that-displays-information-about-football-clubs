class Achievements extends React.Component {
    render() 
    {return (   
  <div style={{marginTop:'50px'}} >
    <p style={{textAlign:'center', fontSize:'30px', marginBottom:'50px'}}> Достижениях клуба</p>
    <h2> {this.props.data.achievements}</h2>
    </div> 
 );}
}

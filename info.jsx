class Info extends React.Component {
    render() 
    {return (   
  <div class="row" style={{textAlign:'center'}}>
    <div class="col-md-6" style={{marginLeft:'0px',marginTop:'50px'}}>
    <h3>{this.props.data.title}</h3>
    <h2> {this.props.data.year}</h2>
    <h2>Город - {this.props.data.city}</h2>
    <img className="IMGS" style={{  width:'400px', height:'600px'}} src={this.props.data.Img}></img>
    </div>
    
  </div> );}
}

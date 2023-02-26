

class MyClub extends React.Component
 {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  show(e) {
    for(let i=0;i<this.props.data.count;i++)
    {
      if(this.props.data.Clubs[i].title==e.target.value)
      {
        ReactDOM.render(<Players data={this.props.data.Clubs[i]}/>, document.getElementById("Players"));
        ReactDOM.render(<Info data={this.props.data.Clubs[i]}/>, document.getElementById("Info"));
        ReactDOM.render(<Achievements data={this.props.data.Clubs[i]}/>, document.getElementById("Achievements"));
      }
    }
  }

  render() {
    return (
      <div  class="row" style={{marginBottom:'50px'}}>
        <p style={{fontSize:'50px', textAlign:'center', marginTop:'50px'}}>Футбольные клубы</p>
        <div class="col-md-8 offset-md-2">
        <select name="select" onChange={this.show} class="form-select form-select-md mb-2 player" aria-label=".form-select-lg example">
         {this.props.data.Clubs.map(function (club) {
            return <Club name={club.title} />;
          })}
          </select>
        </div>
       </div>
    );
  }
}

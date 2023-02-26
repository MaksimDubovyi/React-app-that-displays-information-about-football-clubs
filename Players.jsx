class Players extends React.Component 
{
    render() 
    { 
    
    return (
     <div style={{margin:'50px'}}>
        <p style={{fontSize:'30px', textAlign:'center'}}>Состав игроков</p>
       {this.props.data.Main_cast.map(function (club) {
        return <h1>{club}</h1>;
       })}
      </div>
        );
    }
}


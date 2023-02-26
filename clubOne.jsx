class Club extends React.Component {
    render() {
        return  <option value={this.props.name}>{this.props.name}</option>;
    }
}
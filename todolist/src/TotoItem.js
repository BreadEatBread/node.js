import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: props.isDone,
    };
    this.checkboxClick = this.checkboxClick.bind(this);
  }

  render() {
    const textStyle = {display: 'flex'};
    textStyle.textDecoration = this.state.isDone ? "line-through" : "";
    return (
      <div style={textStyle}>
        <input
          type="checkbox"
          checked={this.state.isDone}
          onChange={this.checkboxClick}
        />
        <span style={{ flex: 1 }}>{this.props.text}</span>
        <button onClick={() => this.props.removeItem(this.props.dataKey)}>
          제거
        </button>
      </div>
    );
  }

  checkboxClick() {
    const changed = !this.state.isDone;
    this.props.changeCheckData(this.props.dataKey, changed);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isDone !== this.props.isDone) {
      this.setState({
        isDone: this.props.isDone,
      });
    }
  }
}

export default TodoItem;

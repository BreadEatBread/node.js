import React from "react";
import "./App.css";
import TodoItem from "./TotoItem"; // export default 가져오기

export class App extends React.Component {
  constructor(props) {
    super(props);

    // 지난 설정 불러오기
    this.state = this.load();

    // 메소드 바인드
    this.textChange = this.textChange.bind(this);
    this.textKeyDown = this.textKeyDown.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeCheckData = this.changeCheckData.bind(this);
  }

  save() {
    localStorage.state = JSON.stringify(this.state);
  }

  load() {
    let output;
    try {
      output = JSON.parse(localStorage.state);
    } catch (e) {}
    if (
      output !== undefined &&
      output.keyCount !== undefined &&
      output.currentValue !== undefined
    ) {
      output = JSON.parse(localStorage.state);
    } else {
      output = {
        keyCount: 0,
        currentValue: "",
        todos: [],
      };
    }
    return output;
  }

  componentDidUpdate() {
    this.save();
  }

  render() {
    return <main>
      <div>
        <h1>할 일 목록</h1>
        <div style={{ display: "flex" }}>
          <input
            style={{ flex: 1 }}
            value={this.state.currentValue}
            onChange={this.textChange}
            onKeyDown={this.textKeyDown}
          />
          <button onClick={this.buttonClick}>추가하기</button>
        </div>
        <div>
          {this.state.todos.map((todo) => {
            return (
              <TodoItem
                dataKey={todo.key}
                isDone={todo.isDone}
                text={todo.text}
                removeItem={this.removeItem}
                changeCheckData={this.changeCheckData}
              />
            );
          })}
        </div>
      </div>
    </main>
  }

  textChange(event) {
    this.setState({
      currentValue: event.target.value,
    });
  }

  textKeyDown(event) {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      this.buttonClick();
    }
  }

  buttonClick(event) {
    if (this.state.currentValue.trim() !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            key: this.state.keyCount.toString(),
            isDone: false,
            text: this.state.currentValue,
          },
        ],
      });
      this.state.keyCount += 1;
      this.state.currentValue = "";
    }
  }

  removeItem(key) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.key !== key;
      }),
    });
  }

  changeCheckData(key, changed) {
    let target = [...this.state.todos];
    target.filter((todo) => todo.key === key)[0].isDone = changed;
    this.setState({
      todos: target,
    });
  }
}
export default App;

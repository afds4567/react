/* @jsx createElement */
import { createDOM, render,createElement, Component } from "./react";

class Title extends Component{
  render() {
    return <h1>{this.props.children}</h1>
  }
}
// function Title(props) {
//   return <h1>{props.children}</h1>
// }
function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>
}
const App = () => <p>
  <Title>React 만들기</Title>
  <ul>
    <Item color="red">첫 번째 아이템</Item>
    <Item color="blue">두 번째 아이템</Item>
    <Item color="green">세 번째 아이템</Item>
  </ul>
</p>
render(<App />,document.querySelector('#root'))

//JSX 태그의 이름이 대문자로 시작되면 문자열로 취급하지 않고 '자바스크립트'값으로 취급
//Ex) React.createElement("p",null,React.createElement(hello,null))
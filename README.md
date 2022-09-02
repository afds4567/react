# react
Creating React by vanilaJS

1. createDOM
```
function createDOM(node){
  //node의 타입이 string이면 TextNode(node) 리턴
  
  //element = document.createElement(node.tag)
  //현재 node의 children을 재귀적으로 돌면서 element에 appendChild
  
  //element 리턴 
}
```

2. createElement (children은 여러개가 들어올 수 있으므로 배열형태로 입력하기위해 ...가변인자 적용)
```
function createElement(tag,props,...children){
  return(tag,props,children)
}

const vdom2 = createElement('p', {},
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {},
    createElement('li', { style: "color:red" }, "첫 번째 아이템"),
    createElement('li', { style: "color:blue" }, "두 번째 아이템"),
    createElement('li', { style: "color:green" }, "세 번째 아이템"),
    )
  );
  ```

3. jsx 기존 가변인자 형식 createElement는 복잡=>markup 형식 적용
- babel의 react preset(문법변환 규칙의 모음)에 의해 markup형식 입력시 자동으로 변환해줌
![image](https://user-images.githubusercontent.com/33995840/187645837-aab16079-cf54-4e31-afd2-fa20cd67ccf0.png)
- React.createElement가 아닌 2.createElement 적용위해 최상단 /* jsx createElement */추가
![image](https://user-images.githubusercontent.com/33995840/187646321-a6fc8257-c02e-4e9e-a699-435285de2788.png)
- 2.createElement에서 두 번째 인자 props 비었을 때 null이 아닌 빈배열 전달 위해
```
export function createElement(tag, props, ...children) {
  props = props || {}
  return{tag,props,children}
}
```

4. 함수 컴포넌트 Ex)<Title>React 만들기</Title>

- createElement(tag,props,...children)의 tag가 함수인 경우

```
function Title(props){
  return(<h1>{props.children}</h1>)
}
function createElement(tag,props,...children){
  if(typeof tag ==='function){
    if(children.length>0){
      return tag({
        ...props,
        children:children.length===1?children[0]:children,
      })
...
```

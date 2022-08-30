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
  
  ```

// import { createElement } from "react";
export class Component{
  constructor(props) {
    this.props = props
  }
}
export function createDOM(node) {
  if (typeof node === 'string') {
    //console.log(document.createTextNode(node),"return")
    return document.createTextNode(node)
  }
  const element = document.createElement(node.tag);
  Object?.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value))
  // console.log("a",element, i,node.children)
  // i+=1;
  node.children
    .map(createDOM)
    .forEach(i => element.appendChild(i)); //element.appendChild.bind(element)
  //element.appendChild.bind(element)
  //console.log("b","elemet:",element, i," node:",node)
  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

export function createElement(tag, props, ...children) {
  props = props || {}
  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      if (children.length > 0) {
        return tag(makeProps(props, children))
      } else {
        return tag(props);
      }
    }
  } else {
      return {
        tag,
        props,
        children
      };
    }
  }


export function render(vdom, container) {
  container.appendChild(createDOM(vdom))
}
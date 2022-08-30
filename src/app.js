// import { createElement } from "react";
import { createDOM, render,createElement } from "./react";

// const vdom = {
//   tag: 'p',
//   props:{},
//   children:[
//     {
//       tag:'h1',
//       props: {
//         style:"color:red",
//       },
//       children:["React 만들기"],
//     },
//     {
//       tag:'ul',
//       props:{},
//       children:[
//         {
//           tag:'li',
//           props: {
//             style:"color:blue"
//           },
//           children:["React 만들기1"],
//         },
//         {
//           tag:'li',
//           props:{},
//           children:["React 만들기2"],
//         },
//       ],
//     },
//   ],
// }
const vdom2 = createElement('p', {},
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {},
    createElement('li', { style: "color:red" }, "첫 번째 아이템"),
    createElement('li', { style: "color:blue" }, "두 번째 아이템"),
    createElement('li', { style: "color:green" }, "세 번째 아이템"),
    )
  );
// if (typeof document !== 'undefined') {
//     // will run in client's browser only
//     body = document.getElementsByTagName("body")[0];
// }

render(vdom2,document.querySelector('#root'))
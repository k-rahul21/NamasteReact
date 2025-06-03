// const heading = React.createElement("h1", {id: "main-heading"}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/** 
 * Nested Elements
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1 id="heading">Hello from Nested Container</h1>
 *  </div>
 * </div>
 * 
 */

const nestedElement = React.createElement("div", {id: "parent"}, 
  React.createElement("div", {id: "child"}, 
    React.createElement("h1", {id: "heading"}, "Hello From Nested Container")
  )
);
// root.render(nestedElement);

/** 
 * Nested Elements with siblings
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1 id="heading">Hello from Nested Container</h1>
 *    <h1 id="sibling">Hello, I'm Sibling</h1>
 *  </div>
 * </div>
 * 
 */


const nestedElementWithSiblings = React.createElement("div", {id: "parent"},
  React.createElement("div", {id: "child"}, 
    [
      React.createElement("h1", {id: "heading"}, "Hello from Nested Container"),
      React.createElement("h1", {id: "sibling"}, "Hello, I'm Sibling")
    ]
  )
)

root.render(nestedElementWithSiblings);


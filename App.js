const heading=React.createElement(
  "div",{"id":"parent"},
  [React.createElement("div",{"id":"child1"},
  React.createElement('h1',{},"this is child 1h1")),
,React.createElement("div",{"id":"child2"},
React.createElement('h1',{},"this is child2 h1"))])


  const root=ReactDOM.createRoot(document.getElementById("root"))
  root.render(heading)
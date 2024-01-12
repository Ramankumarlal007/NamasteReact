const heading = React.createElement("h1", {
    id: "heading",
    className: "superclass",
    xyz: "abc"
}, "Hello World through React App .js ");
// console.log(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        id: "heading1"
    }, "this is rishabh yadav"),
    React.createElement("h1", {
        id: "heading2"
    }, "this is rishabh yadav")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {
        id: "heading1"
    }, "this is Raman yadav"),
    React.createElement("h1", {
        id: "heading2"
    }, "this is ritu yadav")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);
root2.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map

// React

// ReactDOM

// const reactElement = React.createElement(
//   "h1",
//   { className: "main-heading", title: "title value" },
//   "text1",
//   1,
//   [0, 2, 7, "text"]
// );
class HeadingH2 extends React.Component {
  render() {
    console.log(this.props);
    const { className, children } = this.props;
    return React.createElement("h2", { className }, ...children);
  }
}
const reactElement01 = React.createElement(
  HeadingH2,
  {
    className: "main-heading",
  },
  "first h2"
);
const reactElement02 = React.createElement(
  HeadingH2,
  {
    className: "heading2",
  },
  "h2"
);
const wrapperDiv = React.createElement(
  "div",
  null,
  reactElement01,
  reactElement02
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(wrapperDiv);

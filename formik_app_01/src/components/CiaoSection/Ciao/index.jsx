import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Ciao.module.scss";

class Ciao extends Component {
  /**
   * @param {object} props
   * @param {number} props.id
   * @param {string} props.name
   * @param {string} props.lname
   */
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handleBtn = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    const { name, lname, id } = this.props;
    const { isHi } = this.state;
    return (
      <h2>
        <button onClick={this.handleBtn}>switch</button>
        {isHi ? "hi" : "bye"}, {name} {lname} (id = {id})
      </h2>
    );
  }
}

Ciao.propTypes = {
  name: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Ciao.defaultProps = {
  name: "noname",
  lname: "no lname",
  id: NaN,
};
export default Ciao;

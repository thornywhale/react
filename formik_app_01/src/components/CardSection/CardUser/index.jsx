import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

const CardUser = (props) => {
  const {
    user: { id, firstName, isChoosen },
    selectorUser,
  } = props;
  const selectHandle = () => {
    selectorUser(id);
  };
  const styles = { backgroundColor: isChoosen ? "pink" : "grey" };
  return (
    <article onClick={selectHandle} style={styles}>
      <h3>{firstName}</h3>
    </article>
  );
};

// class CardUser extends Component {
//   selectHandle = () => {
//     const { user, selectorUser } = this.props;
//     selectorUser(user.id);
//   };
//   render() {
//     const {
//       user: { firstName, isChoosen },
//     } = this.props;
//     const styles = { backgroundColor: isChoosen ? "pink" : "gray" };
//     return (
//       <article onClick={this.selectHandle} style={styles}>
//         <h3>{firstName}</h3>
//       </article>
//     );
//   }
// }

CardUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    lname: PropTypes.string,
  }).isRequired,
  selectorUser: PropTypes.func.isRequired,
};
CardUser.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
  },
  selectorUser: () => {},
};

export default CardUser;

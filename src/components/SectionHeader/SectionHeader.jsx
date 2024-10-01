import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return <div className="text-center space-y-7">{children}</div>;
};

SectionHeader.propTypes = {
  children: PropTypes.node,
};
export default SectionHeader;

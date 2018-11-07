import { connect } from 'react-redux'

export const mapStateToProps = (mapStateToProps) => {
  return connect(mapStateToProps, {});
};

export const mapDispatchToProps = (mapDispatchToProps) => {
  return connect(() => ({}), mapDispatchToProps);
};

import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.protTypes = {
  message: PropTypes.string.isRequired,
};

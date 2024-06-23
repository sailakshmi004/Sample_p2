import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryButton = ({ button, type }) => {
  return <Button type={type}>{button}</Button>;
};

export default PrimaryButton;

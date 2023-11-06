import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <NavLink to="/">Phone book</NavLink>
    </div>
  );
};

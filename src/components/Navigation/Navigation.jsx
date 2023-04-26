import React from 'react';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="add">Add</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

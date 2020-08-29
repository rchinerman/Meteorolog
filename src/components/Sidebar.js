import React from "react";
import styled, { css } from "styled-components";
import { Location } from "@reach/router";
import { shade } from "polished";
import { Link } from "@reach/router";
import { FiGrid, FiMapPin, FiBarChart2, FiSettings } from "react-icons/fi";

export function Sidebar() {
  return (
    <Location>
      {({ location }) => {
        return (
          <Container>
            <Header>
              <Logo src="https://weather.difer.net/assets/front/img/logo.svg" />
              <Title>Meteorolog</Title>
            </Header>
            <Menu>
              <StyledLink to="/">
                <MenuItem isActive={location.pathname === "/"}>
                  <FiGrid />
                  Dashboard
                </MenuItem>
              </StyledLink>
              <StyledLink to="/statistics">
                <MenuItem isActive={location.pathname === "/statistics"}>
                  <FiBarChart2 />
                  Statistics
                </MenuItem>
              </StyledLink>
              <StyledLink to="/map">
                <MenuItem isActive={location.pathname === "/map"}>
                  <FiMapPin />
                  Map
                </MenuItem>
              </StyledLink>
              <StyledLink to="/settings">
                <MenuItem isActive={location.pathname === "/settings"}>
                  <FiSettings />
                  Settings
                </MenuItem>
              </StyledLink>
            </Menu>
          </Container>
        );
      }}
    </Location>
  );
}

const Container = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.purple};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-bottom: 2px solid ${(props) => shade(0.05, props.theme.purple)};
`;

const Logo = styled.img`
  height: 38px;
  width: 38px;
  margin-right: 8px;
`;

const Title = styled.span`
  font-weight: 600;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
`;

const Menu = styled.ul`
  padding: 0 16px;
`;

const StyledLink = styled(Link)`
  font-weight: 300;
  font-size: 14px;
  text-decoration: none;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 24px;
  list-style-type: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "white" : "rgba(255,255,255,0.75)")};

  &:hover {
    color: white;
  }

  background: ${(props) =>
    props.isActive ? "rgba(255,255,255,0.125)" : "none"};
  transition: background 250ms ease-in-out;

  svg {
    margin-right: 12px;
    font-size: 20px;
  }
`;

const MenuTextStyles = css`
  font-weight: 300;
  font-size: 14px;
  color: ${(props) => (props.isActive ? "white" : "rgba(255,255,255,0.75)")};
  text-decoration: none;
`;

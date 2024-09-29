import React, { useContext, useState } from 'react';
import { useRouter } from "next/router";
import {Image, Page, Grid, Link, Toggle, Tooltip, Text, Button, useTheme, Modal, useModal, Drawer} from "@geist-ui/core";
import {Moon, Sun, Book, Settings, Heart, Eye, Info} from "@geist-ui/icons";
import { parseISO, format } from 'date-fns';

import styled from 'styled-components';

// import ThemeToggler from "../ThemeToggler";
import AnimatedIcon from "./ThemeToggler/AnimatedIcon";
import RoundButton from "./Buttons/Round";

import { useSelector } from 'react-redux';
import { getLastUpdated, getDate } from "../store/selectors";
import ThemeToggler from './ThemeToggler';
import useMyTheme from '@/hooks/useTheme';

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  margin-right: auto;
  margin-left: auto;
  padding: 12px 30px;
  border: 1px solid rgb(235, 238, 241);
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: rgba(255, 255, 255, 0.4);
  // background-color: rgba(25, 25, 25, 0.3);
  backdrop-filter: blur(30px);
  backdrop-filter: blur(20px);
  backdrop-filter: blur(10px);
  
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  
  aspect-ratio: unset;
  transform: none;
  transform: translateY(12px);
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 1;
  z-index: 9999;

  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.17, 0.85, 0.32, 1.4);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition: background 100ms ease 0s, -webkit-transform 100ms ease 0s, -webkit-backdrop-filter 1ms ease 0s;
  // box-shadow: inset 0 0 0 1px #eaeef1,0 4px 30px 0 rgba(0,0,0,.05);

  // animation: nav-in ease .7s;
  // background-color: $navbg;
  // -webkit-backdrop-filter: saturate(180%) blur(20px);
  // backdrop-filter: saturate(180%) blur(20px);
  // border-radius: 25px;


  @media screen and (max-width: 991px) {
    margin-right: auto;
    margin-left: auto;
    flex: 1;
    align-items: center;
  }
  @media (max-width: 374px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 700px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 1200px) {
    margin-right: auto;
    margin-left: auto;
  }

  
  &:hover {
    // background-color: rgba(14, 14, 14, 0.85);
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  // display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    margin: 8px 0;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: -1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div style={{opacity:0}}/>
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default function Header() {
    const {themeType, switchTheme} = useMyTheme();
    // const theme = useTheme();

    const router = useRouter();

    const date = useSelector(getDate);
    const lastUpdated = useSelector(getLastUpdated);

    const dateStr = parseISO(date);

    const { visible, setVisible, bindings } = useModal();

    const [state, setState] = React.useState(false)

    return (
      <>
      <HeaderWrapper>
        
        <Grid.Container gap={1} justify="space-between"  alignItems="center">
          <Grid md={6}>
            <Grid.Container gap={1}>
              {/*<Grid>
                <Image src="/vercel.svg" alt="Logo" width="56px" height="56px" />
              </Grid>*/}
              <Grid>
                <Text
                  h4
                  onClick={() => {
                    router.push("/");
                  }}
                  style={{ margin: "4px 0 0 0", padding: "6px 0", cursor: "pointer" }}
                >
                  nuku
                </Text>
                <Text span type="secondary" title={date}>
                  { date && format(new Date(date), "'Today is' eeee yyyy-MM-dd") }
                </Text>
                {/*<time dateTime={date}>{format(dateStr, 'LLLL d, yyyy')}</time>*/}
              </Grid>
            </Grid.Container>
          </Grid>

          <Grid md={6}></Grid>

          <Grid md={6}>
            <Grid.Container gap={1} justify="flex-end">
              <Grid>
                <Tooltip text={"Watchlists"} placement="bottom">
                  <RoundButton
                    aria-label="Watchlists"
                    icon={<Eye />}
                    onClick={() => router.push('/watchlist')}
                  />
                </Tooltip>
              </Grid>
              <Grid>
                <Tooltip text={"Theme"} placement="bottom">
                  <RoundButton
                      aria-label="Theme"
                      title={ themeType === "dark" ? 'Dark Mode' : 'Light Mode' }
                      icon={themeType === "dark" ? <Moon /> : <Sun />}
                      onClick={()=> switchTheme()}>
                      {/*<svg focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>*/}
                  </RoundButton>

                  {/* <ThemeToggler className={"theme-toggler"} onSwitchTheme={switchTheme} /> */}
                  {/* <AnimatedIcon className={"theme-toggler"} onSwitchTheme={switchTheme} /> */}
                </Tooltip>
              </Grid>
              <Grid>
                {/* <Navbar/> */}
                <Tooltip text={"Info"} placement="bottom">
                  <RoundButton
                    aria-label="Info"
                    icon={<Info />}
                    onClick={() => setState(true) }
                  />
                </Tooltip>

                <Modal {...bindings}>
                  <Modal.Title>About Nuku</Modal.Title>
                  <Modal.Subtitle>This is a modal</Modal.Subtitle>
                  <Modal.Content>
                    <p>Nuku is project by Christian Augustyn</p>
                  </Modal.Content>
                </Modal>
              </Grid>
            </Grid.Container>

            {/*<ModalSettings setVisible={setVisible} bindings={bindings} />*/}
          </Grid>
        </Grid.Container>

      </HeaderWrapper>

      <Drawer visible={state} onClose={() => setState(false)} placement="left">
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Subtitle>This is a drawer</Drawer.Subtitle>
        <Drawer.Content>
          <p>Some content contained within the drawer.</p>
        </Drawer.Content>
      </Drawer>
      
      </>
    )
}
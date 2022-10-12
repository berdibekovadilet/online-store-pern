import React, { useContext } from "react";
import { Context } from "..";
import { Button, Container, Nav, Navbar } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavbarMenu = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          GADGET STORE
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              onClick={() => {
                navigate(ADMIN_ROUTE);
              }}
              variant={"outline-light"}
              className="me-3"
            >
              Админ-панель
            </Button>
            <Button
              onClick={() => {
                navigate(LOGIN_ROUTE);
              }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavbarMenu;

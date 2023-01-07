import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeStore, sl, TOKEN, USER_LOGIN } from "../../util/config";

const HeaderHome = () => {
  const { arrStore } = useSelector((state) => state.productReducer);
  // render quantity len gio hang khi nguoi dung add to cart
  const { profile } = useSelector((state) => state.userReducer);

  const renderQuantity = () => {
    const arr = arrStore.reduce((tt, current) => {
      return tt + current.quantity;
    }, 0);
    return arr;
  };
  const renderCart = () => {
    if (profile) {
      return (
        <>
          <NavLink
            to={"/carts"}
            className={({ isActive }) =>
              isActive && profile
                ? "header-user__item user__actived "
                : "header-user__item"
            }
          >
            <i className="fa-solid fa-cart-shopping"></i>

            <span>({renderQuantity() > 0 ? renderQuantity() : 0}) </span>
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to={"/login"} className={"header-user__item"}>
          <i className="fa-solid fa-cart-shopping"></i>

          <span>({renderQuantity() > 0 ? renderQuantity() : 0}) </span>
        </NavLink>
      </>
    );
  };
  const renderLogin = () => {
    if (profile) {
      return (
        <>
          <NavLink
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "rgba(0, 0, 0, 0.7)",
              lineHeight: "24.2px",
              padding: "0.5rem 1rem",
            }}
            to="/profile"
          >
            <span style={{ color: "white", fontSize: "20px" }}>
              Hello ! {profile?.email}
            </span>
          </NavLink>
          <span
            style={{ cursor: "pointer", color: "white", fontWeight: "500" }}
            onClick={() => {
              removeStore(TOKEN);
              removeStore(USER_LOGIN);
              // chuyen huong dang trang f5x
              window.location.href = "/login";
            }}
          >
            Đăng xuất
          </span>
        </>
      );
    }
    return (
      <>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "header-user__item user__actived " : "header-user__item"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "header-user__item user__actived " : "header-user__item"
          }
        >
          Register
        </NavLink>
      </>
    );
  };
  return (
    <header>
      <div className="header py-2">
        <div className="header-top container">
          <NavLink to="/home" className="header-top__logo">
            <img
              src="/img/09deac31-4bdc-4bb6-b6f2-e644b4ff0500.png"
              alt="..."
            />
          </NavLink>
          <div className="header-top__user">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "header-user__item user__actived "
                  : "header-user__item"
              }
            >
              <i className="fa-solid fa-magnifying-glass "></i>
              <span className="ms-1">Search</span>
            </NavLink>
            {renderCart()}
            {renderLogin()}
            {/* <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "header-user__item user__actived "
                  : "header-user__item"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "header-user__item user__actived "
                  : "header-user__item"
              }
            >
              Register
            </NavLink> */}
          </div>
        </div>
      </div>
      <nav className="container py-2">
        <ul className="header-menu">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "actived" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              // className={({ isActive }) => (isActive ? "actived" : "")}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              // className={({ isActive }) => (isActive ? "actived" : "")}
            >
              Woman
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              // className={({ isActive }) => (isActive ? "actived" : "")}
            >
              Kid
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              // className={({ isActive }) => (isActive ? "actived" : "")}
            >
              Sport
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderHome;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Variants, motion } from "framer-motion";
import styled from "styled-components";

const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scaleY: [1, 1.5, 1],
    transition: { duration: 2.5 },
  },
};

const navItemVariants: Variants = {
  hover: {
    scale: 1.2,
    x: 7,
    y: -7,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const AppNavigation = () => {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(true);
  const { t } = useTranslation();

  const handleNavigationCollapse = () =>
    setIsNavigationCollapsed(!isNavigationCollapsed);
  const closeNavigation = () => setIsNavigationCollapsed(true);

  const AppNavigationLinkList = [
    { to: "/", label: "Journey" },
    { to: "wine", label: "Wine" },
    { to: "food", label: "Food" },
    { to: "locations", label: "Locations" },
  ];

  return (
    <motion.nav className="navbar navbar-expand-md mb-1 mb-md-2 ms-3 ms-md-5 gap-5">
      <motion.div
        className="container navbar-container"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          className="navbar-toggler mt-3 mb-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded={!isNavigationCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavigationCollapse}
          style={{ transform: "translate(210px, -20px)" }}
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div
          className={`row ms-md-4 mt-md-2 collapse navbar-collapse ${
            isNavigationCollapsed ? "" : "show"
          }`}
          style={{ marginTop: "-25px" }}
        >
          <motion.ul
            className={`col-md navbar-nav ${
              isNavigationCollapsed
                ? "gap-4 gap-lg-5"
                : "pt-3 pt-md-1 pb-0 flex-row flex-wrap gap-3"
            }`}
            onClick={closeNavigation}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
          >
            {AppNavigationLinkList.map((AppNavigationLink) => (
              <motion.li
                className="nav-item"
                key={AppNavigationLink.to}
                variants={navItemVariants}
                whileHover="hover"
              >
                <StyledNavLink className="nav-link" to={AppNavigationLink.to}>
                  {t(`navigation.0.${AppNavigationLink.label}`)}
                </StyledNavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};
const StyledNavLink = styled(NavLink)`
  background-color: ${(props) => props.theme.backgroundColor}!important;
  color: ${(props) => props.theme.textColor} !important;
  margin-top: -10px;
  border-bottom: solid white 3px;

  &:focus,
  &:hover,
  &.active,
  &.selected {
    background-color: ${(props) => props.theme.backgroundColor}!important;
    color: ${(props) => props.theme.textColor} !important;
  }
`;

export default AppNavigation;

import classnames from "classnames";
import PropTypes from "prop-types";

export const MenuButton = ({ main, expect, fnc }) => {
  return (
    <button
      className={classnames(
        {
          "menu-active": main === expect,
        },
        { "color-delete": expect === "Delete" }
      )}
      onClick={() => fnc(expect)}
    >
      <p>{expect}</p>
    </button>
  );
};

MenuButton.propTypes = {
  main: PropTypes.string,
  expect: PropTypes.string,
  fnc: PropTypes.func.isRequired,
}

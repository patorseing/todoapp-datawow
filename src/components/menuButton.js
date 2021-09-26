import classnames from "classnames";

export const MenuButton = (props) => {
  const { main, expect, changeFilter } = props;

  return (
    <button
      className={classnames("col-s-12", { "menu-active": main === expect })}
      onClick={() => changeFilter(expect)}
    >
      <p>{expect}</p>
    </button>
  );
};

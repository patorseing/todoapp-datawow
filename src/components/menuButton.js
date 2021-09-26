import classnames from "classnames";

export const MenuButton = (props) => {
  const { main, expect, fnc } = props;

  return (
    <button
      className={classnames(
        "col-s-12",
        {
          "menu-active": main === expect,
        },
        { "color-delete": expect === "Delete" }
      )}
      onClick={() => fnc(main)}
    >
      <p>{expect}</p>
    </button>
  );
};

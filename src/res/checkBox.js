export const CheckBox = () => {
  return (
    <svg
      width="12px"
      height="10px"
      dangerouslySetInnerHTML={{
        __html: `<use xlink:href="#check"></use>`,
      }}
    />
  );
};

const SearchBox = ({ onChangeHandler, placeholder, classNames }) => {
  return (
    <section>
      <input
        type="search"
        placeholder={placeholder}
        className={classNames}
        onChange={onChangeHandler}
      />
    </section>
  );
};

export default SearchBox;

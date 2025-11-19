interface Props {
  placeholder: string;
}

export const SearchBar = ({ placeholder = 'Search' }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button type="button">Search</button>
    </div>
  );
};

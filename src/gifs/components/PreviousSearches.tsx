interface Props {
  searches: string[];
}

export const PreviousSearches = ({ searches }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} className="previous-search-item">
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

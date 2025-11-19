interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((term, index) => (
          <li
            key={index}
            className="previous-search-item"
            onClick={() => onLabelClicked(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

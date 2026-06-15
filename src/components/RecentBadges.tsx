interface RecentBadgesProps {
  searches: string[];
  onSelectBadge: (query: string) => void;
}

export const RecentBadges = ({
  searches,
  onSelectBadge,
}: RecentBadgesProps) => {
  if (searches.length === 0) return null;
  return (
    <div className="badges-container">
      <span>Últimas búsquedas:</span>
      <div className="badges-list">
        {searches.map((s, idx) => (
          <button key={idx} className="badge" onClick={() => onSelectBadge(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

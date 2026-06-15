interface PaginationProps {
  currentPage: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalResults,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalResults / 10);
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        « Primera
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹ Ant
      </button>

      <span className="page-info">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Sig ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Última »
      </button>
    </div>
  );
};

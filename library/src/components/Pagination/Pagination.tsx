import { DsIcon } from "../Icon/Icon";
import "./Pagination.scss";

interface PaginationProps {
  variant?: "center" | "space-between";
  size?: "s" | "m";
  pageCountLabel?: string;
  itemsCountLabel?: string;
  backButton?: string;
  nextButton?: string;
  ariaLabelBackButton?: string;
  ariaLabelNextButton?: string;
  className?: string;
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const DsPagination = ({
  variant = "center",
  size = "m",
  pageCountLabel,
  backButton,
  nextButton,
  ariaLabelBackButton,
  ariaLabelNextButton,
  className,
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  ...rest
}: PaginationProps) => {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage!);
  const maxPageNumbersToShow = 6;

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= maxPageNumbersToShow) {
      // Show all pages if total pages are less than or equal to max pages to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`ds-pagination_item ${
              i === currentPage ? "ds-pagination_item--active" : ""
            }`}
            aria-current={i === currentPage ? "page" : undefined}
            tabIndex={i === currentPage ? -1 : 0}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // The values ​​of startPage and endPage based on the position of currentPage relative to the totalPages and the maxPageNumbersToShow
      let startPage, endPage;
      if (currentPage <= Math.floor(maxPageNumbersToShow / 2)) {
        // The current page is less than or equal to half of the maximum pages to display
        startPage = 1;
        endPage = maxPageNumbersToShow - 1;
      } else if (
        currentPage + Math.floor(maxPageNumbersToShow / 2) >=
        totalPages
      ) {
        // The current page is more than half the maximum number of pages to display
        startPage = totalPages - (maxPageNumbersToShow - 2);
        endPage = totalPages;
      } else if (currentPage >= maxPageNumbersToShow - 1) {
        // The current page is more or equal than the maximum number minus one of pages to display
        startPage = currentPage - Math.floor(maxPageNumbersToShow / 2) + 1;
        endPage = currentPage + Math.floor(maxPageNumbersToShow / 2) - 3;
      } else {
        // The current page is in the middle
        startPage = currentPage - Math.floor(maxPageNumbersToShow / 2) + 1;
        endPage = currentPage + Math.floor(maxPageNumbersToShow / 2) - 2;
      }

      if (startPage > 1) {
        // Always show the first page
        pageNumbers.push(
          <button
            key={1}
            className={`ds-pagination_item ${
              1 === currentPage ? "ds-pagination_item--active" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            1
          </button>
        );
        // Add ellipsis if start page is greater than 2
        if (startPage > 2) {
          pageNumbers.push(
            <span key="start-ellipsis" className="ds-pagination_ellipsis">
              ...
            </span>
          );
        }
      }

      // Add page numbers between startPage and endPage
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`ds-pagination_item ${
              i === currentPage ? "ds-pagination_item--active" : ""
            }`}
            aria-current={i === currentPage ? "page" : undefined}
            tabIndex={i === currentPage ? -1 : 0}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        // Add ellipsis if end page is less than totalPages - 1
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span key="end-ellipsis" className="ds-pagination_ellipsis">
              ...
            </span>
          );
        }
        // Always show the last page
        pageNumbers.push(
          <button
            key={totalPages}
            className={`ds-pagination_item ${
              totalPages === currentPage ? "ds-pagination_item--active" : ""
            }`}
            onClick={() => handleClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div
      className={[
        "ds-pagination",
        ` ds-pagination--size-${size}`,
        ` ds-pagination--variant-${variant}`,
        className ? ` ${className}` : "",
      ].join("")}
      {...rest}
    >
      {pageCountLabel && (
        <div className="ds-pagination_page-count-label">{pageCountLabel}</div>
      )}
      <nav role="navigation" className="ds-pagination_nav">
        <button
          className="ds-pagination_item"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label={ariaLabelBackButton}
        >
          <DsIcon name="chevron_left" />
          {backButton && <span>{backButton}</span>}
        </button>
        {renderPageNumbers()}
        <button
          className="ds-pagination_item"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label={ariaLabelNextButton}
        >
          {nextButton && <span>{nextButton}</span>}
          <DsIcon name="chevron_right" />
        </button>
      </nav>
    </div>
  );
};

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handleFirstPageRandom = () => {
    // when user clicks on dots between pge 1 and current page, website navigates to a random page between those numbers
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const pageDot = randomInt(1 + 1, page - 1);
    handlePageChange(pageDot);
  };
  const handleLastPageRandom = () => {
    // when user clicks on dots between current page and last page, website navigates to a random page between those numbers
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const pageDot = randomInt(page + 1, pageCount - 1);
    handlePageChange(pageDot);
  };
  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ? "bg-base-300 border-base-300 " : ""}`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    //dots
    if (page > 2) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none"
          key="dots-1"
          onClick={handleFirstPageRandom}
        >
          ...
        </button>,
      );
    }

    // current button
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    //dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none"
          key="dots-2"
          onClick={handleLastPageRandom}
        >
          ...
        </button>,
      );
    }
    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }),
    );
    return pageButtons;
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md  join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>

        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md  join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationContainer;

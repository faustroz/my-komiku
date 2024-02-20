const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl bg-dark-background text-dark-text">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-dark-primary"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p>{page} of 8</p>
      {page >= 8 ? null : (
        <button
          className="transition-all hover:text-dark-primary"
          onClick={handleNextPage}
        >
          {" "}
          Next{" "}
        </button>
      )}
    </div>
  );
};

export default Pagination;

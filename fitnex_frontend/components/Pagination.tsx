import React from 'react';
import { Button } from './ui/button';

type PaginationProps = {
  onLoadMore: () => void;
  showLoadMore: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ onLoadMore, showLoadMore }) => {
  return (
    <div className="flex self-center justify-center mt-10">
      {showLoadMore && (
        <Button onClick={onLoadMore} className="bg-[#FFA500] text-white px-4 py-2 rounded-md">
          Load More...
        </Button>
      )}
    </div>
  );
};

export default Pagination;

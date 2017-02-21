import React from 'react';

const ContestPreview = (contest) => {
  return (
    <div className="Contest__preview">
      <div className="Contest__category">
        {contest.categoryName}
      </div>
      <div className="Contest__name">
        {contest.contestName}
      </div>
    </div>
  );
};

export default ContestPreview;

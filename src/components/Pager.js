import React from 'react';

export default function Pager({ data, clicked }) {
  const numOfPages = Math.ceil(data.count / 50);
  const pageList = [];
  for (let i = 1; i < numOfPages; i++) {
    pageList.push(i);
  }

  return (
    <div className="pageList">
      {pageList.map(page => {
        return (
          <p >
            <a onClick={() => {clicked(page)}} href={'#view=users&idx=' + page}>{page}</a>
          </p>
        );
      })}
    </div>
  );
}
//<a href=`#view=users&idx=${page}`></a>

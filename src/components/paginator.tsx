import React from 'react';
import {ramp, xrange} from "coreact";

export type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  shift: number;
  onClick: (page: number) => any;
};


export const Paginator = (props: PaginatorProps) => {
  const {currentPage, shift, totalPages, onClick} = props;
  const e0 = props.currentPage - props.shift;
  const e1 = props.currentPage + props.shift;
  const manyPages = totalPages > shift * 2 + 1;
  return <>
    {totalPages > 0 &&
    <ul className="paginator">
        <li className={`item icon ${currentPage === 0 ? 'is-disabled not-clickable' : ''} `}
            onClick={() => onClick(currentPage - 1)}
        >
            keyboard_arrow_right
        </li>
      {(manyPages && currentPage > shift) && <>
          <PaginatorItem
              currentPage={currentPage}
              page={0}
              onClick={onClick}
          />
          <li className="item icon fast-backward is-disabled is-hidden" onClick={() => onClick(Math.max(currentPage - 5, 0))}/>
      </>}

      {xrange(manyPages ? ramp(e0) - ramp(e1 - totalPages + 1) : 0, manyPages ? e1 + ramp(-e0) - ramp(e1 - totalPages + 1) : totalPages - 1)
        .map((a, i) =>
          <PaginatorItem
            key={i}
            currentPage={currentPage} page={a}
            onClick={onClick}
          />)
      }
      {(manyPages && currentPage < totalPages - 1 - shift) && <>
          <li
              className="item icon fast-forward is-disabled is-hidden"
              onClick={() => onClick(Math.min(currentPage + 5, totalPages - 1))}
          />
          <PaginatorItem
              currentPage={currentPage}
              page={totalPages - 1}
              onClick={onClick}
          />
      </>}
        <li
            className={`item icon ${currentPage === totalPages - 1 ? 'is-disabled not-clickable' : ''} `}
            onClick={() => onClick(currentPage + 1)}
        >
            keyboard_arrow_left
        </li>
    </ul>}
  </>;
};


type PaginatorItemProps = {
  currentPage: number;
  page: number;
  onClick: (page: number) => any;
  disabled?: boolean;
};
const PaginatorItem = (props: PaginatorItemProps) => {
  const {disabled, page, onClick} = props;
  return <li
    className={`item ${disabled ? 'is-disabled not-clickable' : ''} ${(!props.disabled && props.currentPage === props.page) ? 'active' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(page);
    }}>
    {page + 1}
  </li>;
};

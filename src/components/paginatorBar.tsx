import React from "react";
import {Paginator} from "components/paginator";
import {Spinner} from "components/spinner";


export const PaginatorBar = (props: { total: number, page: number, pending: boolean, onChange: (page: number) => any }) => {
  const {total, page, onChange, pending} = props;
  return <>
    <Paginator totalPages={Math.ceil(total / 10)} currentPage={page} shift={2} onClick={onChange}/>
    <div className="ml-auto"/>
    {pending && <Spinner/>}
    {total > 0 ? <div>
      <span>نمایش</span>&nbsp;
      <span>{page * 10 + 1}</span>&nbsp;
      <span>تا</span>&nbsp;
      <span>{Math.min(total, (page + 1) * 10)}</span>&nbsp;
      <span>از</span>&nbsp;
      <span>{total}</span>&nbsp;
      <span>مورد.</span>&nbsp;
    </div> : <div>موردی یافت نشد</div>}
  </>;
}

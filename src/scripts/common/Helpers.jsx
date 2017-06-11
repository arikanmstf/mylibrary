import React from 'react';
import { Link } from 'react-router-dom';

export function commaListItems(item, ids, route) {
  if (!item) return null;
  let itemArr = item.split(',');
  const idsArr = ids.split(',');
  const rowLen = itemArr.length;

  itemArr = itemArr.map((w, i) => {
    return (<span key={w}><Link to={`/${route}/${idsArr[i]}`}>{w}</Link>{rowLen === i + 1 ? null : ', '}</span>);
  });
  return itemArr;
}

export function fromArrayToCommaEdit(itemArr, route, onClickEvent) {
  const rowLen = itemArr.length;

  function onClick(e) {
    onClickEvent(e);
  }
  return itemArr.map((item, index) => {
    return (
      <span key={item.key}>
        <Link to={`/${route}/${item.key}`}>{item.value}</Link>
        <i onClick={() => onClick(item)} className="glyphicon glyphicon-remove" />
        {rowLen === index + 1 ? null : ', '}
      </span>
    );
  });
}

export function fromCommaToArray(string, ids) {
  const strArr = string.split(',');
  const idsArr = ids.split(',');

  return strArr.map((str, index) => {
    return {
      value: str,
      key: idsArr[index]
    };
  });
}
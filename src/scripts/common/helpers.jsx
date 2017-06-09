import React from 'react';
import { Link } from 'react-router-dom';

export default function commaListItems(item, ids, route) {
  if (!item) return null;
  let itemArr = item.split(',');
  const idsArr = ids.split(',');
  const rowLen = itemArr.length;

  itemArr = itemArr.map((w, i) => {
    return (<span key={w}><Link to={`/${route}/${idsArr[i]}`}>{w}</Link>{rowLen === i + 1 ? null : ', '}</span>);
  });
  return itemArr;
}

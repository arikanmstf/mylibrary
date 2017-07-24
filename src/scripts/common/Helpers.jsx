import React from 'react';
import { Link } from 'react-router-dom';
import config from 'config';
import Storage from 'common/Storage';

export function commaListItems(item, ids, route) {
  if (!item) return null;
  let itemArr = item.split(',');
  const idsArr = ids.split(',');
  const rowLen = itemArr.length;

  itemArr = itemArr.map((w, i) => {
    return (<span key={idsArr[i]}><Link to={`${config.homeUrl}${route}/${idsArr[i]}`}>{w}</Link>{rowLen === i + 1 ? null : ', '}</span>);
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
      <span key={item.key} onClick={() => onClick(item)} className="comma-list">
        {item.value}
        <i className="glyphicon glyphicon-remove" />
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

export const createErrorMessage = (msg) => {
  let message = msg;
  if (typeof message !== 'string') {
    if (message.response && message.response.data) {
      if (message.response.data.error) {
        if (message.response.data.error.code === '403') {
          Storage.clear();
        }
        message = message.response.data.error.message;
      } else {
        message = message.response.statusText;
      }
    } else {
      message = 'An error has occured';
    }
  }
  return message;
};

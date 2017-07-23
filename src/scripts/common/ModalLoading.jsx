import React from 'react';
import config from 'config';

const ModalLoading = () => {
  return (
    <div>
      <div className="loadingBaseLayer" />
      <div className="loadingSpinnerContainer">
        <center><img src={`${config.homeUrl}assets/img/loading.gif`} width="35" height="35" /></center>
      </div>
    </div>
  );
};

export default ModalLoading;

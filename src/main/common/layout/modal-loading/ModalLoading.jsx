import React from 'react';

import loadingGif from 'img/loading.gif';

const ModalLoading = () => {
  return (
    <div>
      <div className="loadingBaseLayer" />
      <div className="loadingSpinnerContainer">
        <center><img src={loadingGif} width="35" height="35" alt="loading" /></center>
      </div>
    </div>
  );
};

export default ModalLoading;

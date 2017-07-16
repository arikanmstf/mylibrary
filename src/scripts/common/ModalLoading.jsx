import React from 'react';

const ModalLoading = () => {
  return (
    <div>
      <div className="loadingBaseLayer" />
      <div className="loadingSpinnerContainer">
        <center><img src="/assets/img/loading.gif" width="35" height="35" /></center>
      </div>
    </div>
  );
};

export default ModalLoading;

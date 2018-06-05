import React from 'react';
import styled from 'styled-components';
import loadingGif from 'img/loading.gif';
import CenteredDiv from 'common/layout/CenteredDiv';

const BaseLayer = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(88,88,88,0.8);
z-index: 100000;
`;

const Spinner = styled.div`
position: fixed;
width: 100%;
text-align: center;
top: 50%;
left: 0px;
z-index: 100001;
`;

const ModalLoading = () => {
  return (
    <div>
      <BaseLayer />
      <Spinner>
        <CenteredDiv>
          <img src={loadingGif} width="35" height="35" alt="loading" />
        </CenteredDiv>
      </Spinner>
    </div>
  );
};

export default ModalLoading;

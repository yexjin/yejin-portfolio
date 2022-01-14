import React from "react";
import ScaleLoader from "react-spinners/BeatLoader";
import styled from 'styled-components';

const Box = styled.div`
width: 100px;
line-height: 500px;
margin: 0 auto;
vertical-align: baseline;
`

const CTLoading = () => {
  return (
    <Box>
      <ScaleLoader size="15" color="#FBA2A2" radius="3" />
    </Box>
  );
};

export default CTLoading;
import React, { useState } from 'react';

const AnswerEntry = ({ answer }) => {

  return (
    <div>
      <b>{`A: ${answer.body}?`}</b>
    </div>
  );
};

export default AnswerEntry;

import React from 'react';

type ChoiceProps = {
  index: number;
  text: string;
  isSelected: boolean;
  onClick: () => void;
};

const Choice: React.FC<ChoiceProps> = (props) => {
  const { index, text, isSelected, onClick } = props;

  const id = (index + 10).toString(32); // converts index to alphabet

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={`card mb-2 ${isSelected ? 'text-bg-success' : 'text-bg-light'}`}
      role="button"
      tabIndex={index + 1}
      onClick={onClick}
      onKeyDown={onKeyDown}>
      <div className="card-body d-flex">
        <span className="text-uppercase">{id}.&nbsp;</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Choice;

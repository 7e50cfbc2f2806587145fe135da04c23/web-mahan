import React from 'react';

export type SpinnerProps = {
  size?: number;
  className?: string;
  color?: string;
}
export const Spinner = (props: SpinnerProps) => {
  const {size = 40, color = ''} = props;
  return <img src={require('./spinner.svg')} className="spinner" alt="" width={size} height={size}/>;
};

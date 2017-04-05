import * as React from 'react';
import * as styles from './DatePicker.scss';

export interface Props {
  label: string,
}

export default function Weekday({label}: Props) {
  return <div className={styles.Weekday}>{label}</div>;
}

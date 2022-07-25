import {track} from './analyticsUtils';

export const addNumbers = (num: number, plusNum: number) => {
  track('addNumbers');
  return num + plusNum;
};

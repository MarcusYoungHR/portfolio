import {format} from 'date-fns';

export function findCurrentProgress(taskId, todaysDate, context) {
  const result = context.find((context) => {
    return context.taskId === taskId && context.date === todaysDate;
  });
  return result;
};

export function findCurrentWastedTime(date, context) {
  return context.find(item => item.date === date);
};

export const getTodaysDate = () => {
  return format(new Date(), "yyyy-MM-dd");
}
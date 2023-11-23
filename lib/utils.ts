import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - createdAt.getTime();
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} ${
      elapsedSeconds === 1 ? "second" : "seconds"
    } ago`;
  }

  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  if (elapsedMinutes < 60) {
    return `${elapsedMinutes} ${
      elapsedMinutes === 1 ? "minute" : "minutes"
    } ago`;
  }

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) {
    return `${elapsedHours} ${elapsedHours === 1 ? "hour" : "hours"} ago`;
  }

  const elapsedDays = Math.floor(elapsedHours / 24);
  if (elapsedDays < 30) {
    return `${elapsedDays} ${elapsedDays === 1 ? "day" : "days"} ago`;
  }

  const elapsedMonths = Math.floor(elapsedDays / 30);
  if (elapsedMonths < 12) {
    return `${elapsedMonths} ${elapsedMonths === 1 ? "month" : "months"} ago`;
  }

  const elapsedYears = Math.floor(elapsedMonths / 12);
  return `${elapsedYears} ${elapsedYears === 1 ? "year" : "years"} ago`;
};

export const formatBigNumber = (inputNumber: number): string => {
  let formattedNumber: string;
  let divisor: number;

  if (inputNumber >= 1_000_000) {
    formattedNumber = (inputNumber / 1_000_000).toFixed(1);
    divisor = 1_000_000;
  } else if (inputNumber >= 1_000) {
    formattedNumber = (inputNumber / 1_000).toFixed(1);
    divisor = 1_000;
  } else {
    formattedNumber = inputNumber.toString();
    divisor = 1;
  }

  // Remove trailing '.0' for whole numbers
  formattedNumber = formattedNumber.replace(/\.0$/, "");

  // Add the appropriate extension
  if (divisor === 1_000_000) {
    formattedNumber += "M";
  } else if (divisor === 1_000) {
    formattedNumber += "K";
  }

  return formattedNumber;
};

export const formatTime = (sec: number): string => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60) % 60;
  const second = sec % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`;
};
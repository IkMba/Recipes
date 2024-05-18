export default function formatTime(totalTime) {
  const hour = Math.floor(totalTime / 60);
  const mins = totalTime % 60;
  const time =
    totalTime > 60
      ? `${hour} hours ${mins > 1 ? mins + "mins" : ""}`
      : totalTime + " mins";

  return time;
}

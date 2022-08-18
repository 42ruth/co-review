export function padNumber(num: number) {
  return String(num).padStart(2, '0');
}

export function formatDate(rawDate: string) {
  const rawDateObject = new Date(rawDate);
  const todayDateObject = new Date();
  const diffMin = Math.floor(
    (todayDateObject.getTime() - rawDateObject.getTime()) / (1000 * 60)
  );
  const diffHour = Math.floor(diffMin / 60);
  const diffDate = Math.floor(diffHour / 24);
  let dateString;
  if (diffMin < 60) {
    dateString = diffMin <= 0 ? '방금 전' : `${diffMin}분 전`;
  } else if (diffHour < 24) {
    dateString = `${diffHour}시간 전`;
  } else if (diffDate < 7) {
    dateString = `${diffDate}일 전`;
  } else {
    const year = rawDateObject.getFullYear();
    const month = rawDateObject.getMonth() + 1;
    const date = rawDateObject.getDate();
    const hour = rawDateObject.getHours();
    const minute = rawDateObject.getMinutes();
    const ampm = hour < 12 ? '오전' : '오후';
    dateString = `${year}.${padNumber(month)}.${padNumber(date)} ${ampm} ${
      hour > 12 ? hour % 12 : hour
    }:${padNumber(minute)}`;
  }
  return dateString;
}

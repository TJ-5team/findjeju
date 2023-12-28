function formatDate(num) {
  return num < 10 ? '0' + num : num.toString();
}
export default function useGetDate(oneYearLater = false, oneMonthLater = false, includeTime = false) {
    const now = new Date();
    let time = includeTime ? "0600" : "";
  
    if(oneYearLater) {
      now.setFullYear(now.getFullYear());
    }

    if(oneMonthLater) {
      now.setMonth(now.getMonth() + 1);
    }

    if (includeTime && now.getHours() < 6) {
      now.setDate(now.getDate() - 1);
      time = includeTime ? "1800" : "";
    }
  
    let year = now.getFullYear();
    let month = formatDate(now.getMonth() + 1);
    let day = formatDate(now.getDate());

    return `${year}${month}${day}${time}`;
}
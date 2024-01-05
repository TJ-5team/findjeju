function formatDate(num) {
  return num < 10 ? '0' + num : num.toString();
}
export default function useGetDate(oneYearLater = false, oneMonthLater = false, includeTime = false, twoWeeks = false, lastDay = false) {
    const now = new Date();
    let time = includeTime ? "0600" : "";
  
    if(oneYearLater) {
      now.setFullYear(now.getFullYear()+1);
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

    const days = new Array;
    if(twoWeeks){
      for (let index = 0; index < 14; index++) {
        let currentDay = new Date(now.getTime());
        currentDay.setDate(currentDay.getDate() + index);
        days.push({day : currentDay.getFullYear() + formatDate(currentDay.getMonth() + 1) + formatDate(currentDay.getDate()), week : currentDay.getDay()});
      }
    }
  
    if(lastDay){
      const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      months.forEach(month => {
        const day = new Date(year, month , 0).getDate();
        days.push({firstDay : year + month + "01" , lastDay : year + month + day})
      });
    }
    
    return { date : `${year}${month}${day}${time}`, days};
}
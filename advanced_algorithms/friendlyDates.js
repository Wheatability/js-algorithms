function makeFriendlyDates(arr) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let date1 = arr[0].split('-'),
      date2 = arr[1].split('-'),
      year1 = parseInt(date1[0]),
      year2 = parseInt(date2[0]),
      month1 = parseInt(date1[1]),
      month2 = parseInt(date2[1]),
      day1 = parseInt(date1[2]),
      day2 = parseInt(date2[2]),
      curYear = 2016;
  
  // eliminate redundancy
  if(JSON.stringify(date1) === JSON.stringify(date2)) {
    return [buildString(date1)];
  } else if(year1 === curYear && year2 === curYear) {
    if(month1 === month2) {
      return [buildString(date1, true, false), buildString(date2, false, false)];
    } 
    return [buildString(date1, true, false), buildString(date2, true, false)];
  } else if (year2 - year1 < 1) {
    if(month1 === month2) {
      return [buildString(date1, true, false), buildString(date2, false, false)];
    }
    return [buildString(date1), buildString(date2, true, false)];
  } else {
    if(year1 === curYear && year2 === curYear + 1) {
      if(month2 < month1) {
        return [buildString(date1, true, false), buildString(date2, true, false)];
      }
    }
    if(year2 - year1 === 1) {
      if(month1 === month2 && day2 < day1) {
        return [buildString(date1), buildString(date2, true, false)];
      }
    }
  }

  // default
  return [buildString(date1), buildString(date2)];

  function buildString(date, showMonth = true, showYear = true) {
    let year = date[0],
        month = months[parseInt(date[1]) - 1],
        day = parseInt(date[2]),
        ending = '',
        lastDigit = parseInt(date[2][date[2].length - 1]);

    switch(lastDigit) { //generate appropriate date ending
      case 1:
        ending += 'st';
        break;
      case 2:
        if(day === 12) ending += 'th';
        else ending += 'nd';
        break;
      case 3: 
        if(day === 13) ending += 'th';
        else ending += 'rd';
        break;
      default:
        ending += 'th';
    }
        
    if (!showMonth) {
      return `${day}${ending}`;
    } else if (!showYear) {
      return `${month} ${day}${ending}`;
    } else {
      return `${month} ${day}${ending}, ${year}`;
    }
  }
}

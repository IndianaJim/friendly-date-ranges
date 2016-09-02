/* Friendly Date Ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"]. */

function makeFriendlyDates(arr) {

  function getDayString(dayNum) {
    var dayString;
    switch (dayNum) {
      case 1:
        dayString = "1st";
        break;
      case 2:
        dayString = "2nd";
        break;
      case 3:
        dayString = "3rd";
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        dayString = dayNum + "th";
        break;
      case 21:
        dayString = "21st";
        break;
      case 22:
        dayString = "22nd";
        break;
      case 23:
        dayString = "23rd";
        break;
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        dayString = dayNum + "th";
        break;
      case 31:
        dayString = "31st";
        break;
      default:
        dayString = "invalid day num given";
    }; //end switch dayNum
    return dayString;
  } //end function get Day String

  var fromDate = arr[0].split('-');
  var toDate = arr[1].split('-');
  var newArr = [];
  var newFrom = "";
  var newTo = "";
  var thisYear = new Date().getFullYear();
  var monthsApart = 0;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  monthsApart = ((parseInt(toDate[0]) - parseInt(fromDate[0])) * 12) + (parseInt(toDate[1]) - parseInt(fromDate[1]));
  
  //build new from date string
  newFrom = newFrom.concat(months[parseInt(fromDate[1]) - 1] + " " + getDayString(parseInt(fromDate[2])));
  if (parseInt(fromDate[0]) == thisYear && monthsApart <= 12) {
    //do not add from year  
  } else {
    newFrom = newFrom.concat(", " + fromDate[0]);
  }
  //build new end date string
  if (monthsApart >= 1) {
    newTo = newTo.concat(months[parseInt(toDate[1]) - 1] + " ");
  }
  newTo = newTo.concat(getDayString(parseInt(toDate[2])));
  if (monthsApart >= 12) {
    if (monthsApart == 12 && parseInt(toDate[2]) < parseInt(fromDate[2])) {
      //do not add year                              
    } else {
      newTo = newTo.concat(", " + toDate[0]);
    }
  }
  newArr.push(newFrom);
  if (arr[0] != arr[1]) newArr.push(newTo);
  //console.log(newArr);
  return newArr;
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);
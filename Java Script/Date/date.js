
console.log('Date object');
// returns system date
var systemDate = new Date()   /// 
console.log(systemDate);
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMonth());  //11
console.log(systemDate.getDay());   // 2

// returns date by adding millisceonds to january 1 1970
var dateUsingMillisecondsconst = new Date(86400000)
console.log(dateUsingMillisecondsconst);

console.log('------------------string constructor---------------')
var datestringconst = new Date()
console.log(datestringconst);
console.log(datestringconst.getDay());
console.log(datestringconst.getFullYear());

// dd/mm/yyyy
var dateVal = datestringconst.getDate()
var monthVal = datestringconst.getMonth()
var yearVal = datestringconst.getFullYear()

var fullDate = `${dateVal}/${monthVal+1}/${yearVal}`
console.log(fullDate)

console.log('----------------------------------------------');
// new Date(year,month,day,hours,minutes,seconds,milliseconds) Constructor
var dateObj = new Date(2021, 11)
console.log(dateObj);
var dateObj1 = new Date(2021, 10, 21)
console.log(dateObj1);
var dateObj2 = new Date(2021, 0, 21, 12,56,56,878)
console.log(dateObj2);
console.log(dateObj2.getMilliseconds());

console.log('------------------------------------------------');
//Tuesday, December 12, 2012
var systemDate1 = new Date('Dec 12 2012')
console.log(systemDate1)

var monVal = systemDate1.getMonth()
var dayValue = systemDate1.getDay()
var yearValue = systemDate1.getFullYear()
var dateValue = systemDate1.getDate()
 
var months = ['january','February','March','April','May','June','July','August','Septumber','Octuber','November','December']
var monthdata = months[monVal]

var weekdays = ['sunday','monday','tuesday','wednasday','Thursday','Friday','saturday']
var daydata = weekdays[dayValue] 
var formattedDate = `${daydata},${monthdata} ${dateValue},${yearValue}`
console.log(formattedDate)

//dateObjVal.tolocaleDateString(locals,options)
var dateObjVal1 = new Date()
var formattedDate1 = dateObjVal1.toLocaleDateString(
    'TEL-IN',
    {
        weekday: 'long',
        month: 'short',
        year: 'numeric',
        day: 'numeric'
    })
    console.log(formattedDate1);

    

















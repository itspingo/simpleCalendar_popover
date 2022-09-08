var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var calendarObject = document.getElementById('divcalendar');
var currentMonth = new Date().getMonth();
var currentMonthName = months[currentMonth];
var currentYear = new Date().getFullYear();
document.getElementById('calHeader').innerHTML = currentMonthName + ', ' + currentYear;
function loadCalendar(month, year) {
    //alert('function is called');
    var firstDay = new Date(year, month, 01).getDay();
    var numberOfDays = 32 - new Date(year, month, 32).getDate();
    //console.log('numberOfDays: '+numberOfDays);
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let theadrow = document.createElement('tr');
    for (wd = 0; wd <= 6; wd++) {
        let th = document.createElement('th');
        let thtext = document.createTextNode(days[wd]);
        th.append(thtext);
        theadrow.append(th);
    }
    thead.append(theadrow);
    table.append(thead);
    let tbody = document.createElement('tbody');
    var datedate = 1;
    for (wks = 0; wks <= 5; wks++) {
        let tr = document.createElement('tr');
        for (wds = 0; wds <= 6; wds++) {
            let td = document.createElement('td');
            if (wks == 0 && wds < firstDay) {
                //td.insertAdjacentHTML('beforeend','<div class="divNoData" ></div>');
            } else if (datedate <= numberOfDays) {
                let tdtext = document.createTextNode(datedate);
                td.append(tdtext);
                //let tdtext = document.createHTMLNode(datedate);
                td.insertAdjacentHTML('beforeend', '<div class="divdata" id="div' + datedate + currentMonth + currentYear + '" ></div>');
                getData(datedate, currentMonth, currentYear, 'div' + datedate + currentMonth + currentYear);
                datedate++
            }/*else{
                td.insertAdjacentHTML('beforeend','<div class="divNoData" ></div>');
            }*/
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    calendarObject.appendChild(table);
    //calendarObject.replaceWith(table) ;
}
loadCalendar(currentMonth, currentYear);
function next() {
    currentMonth++;
    if (currentMonth == 12) {
        currentMonth = 0;
        currentYear++;
    }
    var currentMonthName = months[currentMonth];
    document.getElementById('calHeader').innerHTML = currentMonthName + ', ' + currentYear;
    document.getElementById('divcalendar').innerHTML = '';
    loadCalendar(currentMonth, currentYear);
}
function prev() {
    currentMonth--;
    if (currentMonth == -1) {
        currentMonth = 11;
        currentYear--;
    }
    var currentMonthName = months[currentMonth];
    document.getElementById('calHeader').innerHTML = currentMonthName + ', ' + currentYear;
    document.getElementById('divcalendar').innerHTML = '';
    loadCalendar(currentMonth, currentYear);
}
function getData(vday, vmonth, vyear, vdiv) {
    //console.log('vdiv: '+vdiv);
    $.ajax({
        url: "data.php",
        type: "POST",
        data: {
            vday: vday,
            vmonth: vmonth,
            vyear: vyear
        },
        cache: false,
        success: function (dataResult) {
            //var dataResult = JSON.parse(dataResult);
            //console.log(dataResult);
            $('#' + vdiv).html(dataResult);
            if (dataResult.statusCode == 200) {
                $('#' + vdiv).html('Data added successfully !');
            }
            else if (dataResult.statusCode == 201) {
                $('#' + vdiv).html('Error occured !');
            }
        }
    });
}

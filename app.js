// eid-1-day
var eidDates = document.getElementById("eiddate1");
var dateEId = new Date("Sun, 10 July 2022").getTime();
var today = new Date().getTime();
var subtract = dateEId - today;
var round = Math.round(subtract / (1000 * 60 * 60 * 24));
eidDates.innerHTML = round + "<b>" + " Days Ago" + "</b>";

var beforeEid = document.getElementById("eidhour1");
var tareekh = new Date("Sat, July 9 2022").getTime();
var todayDate = new Date().getTime();
var minus2 = tareekh - todayDate;
var round2 = Math.round(minus2 / (1000 * 60 * 60));
beforeEid.innerHTML = round2 + "<b>" + " Hours Ago" + "</b>";

var minute = document.getElementById("eidmnt1");
var minute2 = new Date("Sat, July 9 2022").getTime();
var minute3 = new Date().getTime();
var minus3 = minute2 - minute3;
var round3 = Math.round(minus3 / (1000 * 60));
minute.innerHTML = round3 + "<b>" + " Minute Ago" + "</b>";
// eid-1-day


// eid-2-day
var eidDates = document.getElementById("eiddate2");
var dateEId = new Date("Sun, July 11 2022").getTime();
var today = new Date().getTime();
var subtract = dateEId - today;
var round = Math.round(subtract / (1000 * 60 * 60 * 24));
eidDates.innerHTML = round + "<b>" + " Days Ago" + "</b>";


var beforeEid = document.getElementById("eidhour2");
var tareekh = new Date("Sun, July 11 2022").getTime();
var todayDate = new Date().getTime();
var minus2 = tareekh - todayDate;
var round2 = Math.round(minus2 / (1000 * 60 * 60));
beforeEid.innerHTML = round2 + "<b>" + " Hours Ago" + "</b>";


var minute = document.getElementById("eidmnt2");
var minute2 = new Date("Sun, July 11 2022").getTime();
var minute3 = new Date().getTime();
var minus3 = minute2 - minute3;
var round3 = Math.round(minus3 / (1000 * 60));
minute.innerHTML = round3 + "<b>" + " Minute Ago" + "</b>";
// eid-2-day

// eid-3-day
var eidDates = document.getElementById("eiddate3");
var dateEId = new Date("Sun, July 12 2022").getTime();
var today = new Date().getTime();
var subtract = dateEId - today;
var round = Math.round(subtract / (1000 * 60 * 60 * 24));
eidDates.innerHTML = round + "<b>" + " Days Ago" + "</b>";

var beforeEid = document.getElementById("eidhour3");
var tareekh = new Date("Sun, July 12 2022").getTime();
var todayDate = new Date().getTime();
var minus2 = tareekh - todayDate;
var round2 = Math.round(minus2 / (1000 * 60 * 60));
beforeEid.innerHTML = round2 + "<b>" + " Hours Ago" + "</b>";

var minute = document.getElementById("eidmnt3");
var minute2 = new Date("Sun, July 12 2022").getTime();
var minute3 = new Date().getTime();
var minus3 = minute2 - minute3;
var round3 = Math.round(minus3 / (1000 * 60));
minute.innerHTML = round3 + "<b>" + " Minute Ago" + "</b>";

var minute = document.getElementById("message");
var minute2 = new Date("Sat, July 11 2022 17:00:00").getTime();
var minute3 = new Date().getTime();
var minus3 = minute2 - minute3;
var round3 = Math.round(minus3 / (1000 * 60 * 60));
minute.innerHTML = "The Third Day Of Eid ul Adha After " + "<b>" + " SUNSET" + "</b>" + " You" + "<b>" + " Can't " + "</b>" + "Qurbani";
  // eid-3-day
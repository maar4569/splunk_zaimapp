function getDate(year,month,day,adddays){
    var dt      = new Date(year,(month-1),day);
    var baseSec = dt.getTime();
    var addSec  = adddays * 86400000;
    var sec     = baseSec + addSec;
    dt.setTime(sec);
    return dt;
};

function getWeekDayStrings(date){
    var weekDay = ["sun","mon","tue","wed","thu","fri","sat"];
    return weekDay[date.getDay()];
};

function getLastDayOfMonth(year,month){
    var tmpDate = new Date(year,month,0);
    return tempDate.getDate();
};
function getLastMonth(){
    var now = new Date();
    var lastMonth = now.getMonth();
    var lastYear  = now.getYear()-1;
    if(( now.getMonth()+1) == 1 ){
        return lastyear + "/12";
    else{
	return now.getYear + "/" + + zeroPadding(lastMonth,2); 
    };
}
function zeroPadding(num,len){
    var strNum = num.toString();
    if(len<=0 || num<0 || !parseInt(num)) || !parseInt(len) || strNum.length > len ){ return num  };
    for(var i=0,zero='';i<=len-1;i++){ zero=zero + "0";  }
    return (zero + num).slice(len * (-1));
}

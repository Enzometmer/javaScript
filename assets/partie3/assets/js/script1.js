let year;

for ( year=0; year<=2030;  year++ ) {
    if ((year%4==0 && year%100!=0 )|| year%400==0) {
        document.write('<p class=red>'+ year +'</p>');
    } else {
        document.write('<p>' + year + '</p>');
    }
}


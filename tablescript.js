let p,q;
document.write("<th></th>");
for( p=0;p<=6;p++){
    document.write("<th>"+p+"</th>");
}
for(p=0;p<=22;p++){
    document.write("<tr><td>"+p+"</td>");
    for(q=0;q<=6;q++){
        document.write("<td class='td-bt' id="+p+"_"+q+"></td>");
    }
    document.write("</tr>");
}
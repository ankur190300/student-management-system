
console.log("the script is loaded");
var counter = 0;
//console.log(id);
/*if (<%= id %>)
{
    document.getElementById("drop_down_menu").selectedIndex = <%=id %>;
}*/
function show_table() {
    counter++;
    //if (counter % 2 == 0) {
        var x = document.getElementById("drop_down_menu").selectedIndex;

        window.location.href=("/admin_table/?id=" + x);
    //}

}
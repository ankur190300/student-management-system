const port = 8000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(express.static('./assets'));

var s_table = [
    {
        name: "ankur",
        number: "9560949859"
    },
    {
        name: "anvi",
        number: "9871768320"
    }


];
var s_t = [
    {
        name: "ankur",
        number: "9560949859",
        motto:"done scenes"
    },
    {
        name: "anvi",
        number: "9871768320",
        motto:"sed scenes"

    }


];

var s_info = {
    "name": "ankur tiwari",
    "father's name": "shailendra tiwari",
    "mother's name": "bindu tiwari",
    "rank": "1488",
    "branch": "coe",
    "address":"b-103 /delhi state apartments /sector 19 /dwarka / new delhi"
}



app.get('/', function (req, res) {

    res.render('home', { title: 'home' });
});

app.get('/student_table', function (req, res) {

    res.render('student_table', { title: 'student-table', table:s_info});
});

app.get('/admin_table', function (req, res) {

    var t_sent = req.query.id;
   // console.log(t_sent);
    if (!t_sent)
        t_sent = '0';
    if (t_sent == '2') {
        res.render('admin_table', { title: 'admin-table', table: s_table , id:t_sent});
    }
    else  if (t_sent == '0') {

        res.render('admin_table', { title: 'admin-table', table: [], id: t_sent });
    }
    else {
        res.render('admin_table', { title: 'admin-table', table: s_t , id:t_sent});
    }
});

app.get('/sign-in', function (req, res) {

    res.render('sign_in', { title: 'sign-in'});
});

app.get('/sign-up', function (req, res) {

    res.render('sign_up', { title: 'sign-up' });
});




app.listen(port, function (err) {

    if (err) {
        console.log('there was an error in connecting to the express server');
        return;
    }
    console.log(`the server is up and running on port ${port}`);
})

/*-----------------EMI Calculator Start------------------*/

function showpay() {

    var loan = document.getElementById("loan").value;
    var tenure = document.getElementById("tenure").value;
    var roi = document.getElementById("roi").value;

    var N = tenure * 12;
    var I = (roi / 100) / 12;
    var v = Math.pow((1 + I), N);
    var t = (I * v) / (v - 1);
    var result = loan * t;
    result = result.toFixed(2)

    //console.log(result);

    var totalint = result * N;
    var intamount = totalint - loan;
    intamount = intamount.toFixed(0);
    intamount = parseInt(intamount);
    loan = parseInt(loan);

    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    console.log(loan);
    console.log(intamount);
    
    var totalpay = loan + intamount;
    
    document.getElementById("total").innerHTML = "<b><p>Total Payable : " + totalpay + "</p></b>";

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
                        ['Type', 'Amount'],
                        ['Principal', loan],
                        ['Interest', intamount]
                    ]);

        console.log(data);

        var options = {
            'width': 550,
            'height': 400
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        
        
    }
}

/*-----------------EMI Calculator End--------------------*/
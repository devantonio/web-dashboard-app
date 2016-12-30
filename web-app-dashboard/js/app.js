$("#hourly").click(function selectHourly() {
  $("#hourly").addClass("background");
  $("#monthly").removeClass("background");
  $("#daily").removeClass("background");
  $("#weekly").removeClass("background");
  LineChart.data.datasets[0].data = [20, 39, 16, 20, 16, 29, 35];
  LineChart.data.labels = ["Hour1", "Hour2", "Hour3", "Hour4", "Hour5", "Hour6", "Hour7"];
  LineChart.update();
});

$("#monthly").click(function selectMonthly() {
  $("#monthly").addClass("background");
  $("#daily").removeClass("background");
  $("#weekly").removeClass("background");
  $("#hourly").removeClass("background");
  LineChart.data.datasets[0].data = [750, 350, 600, 500, 700, 500, 400, 350, 750, 350, 750, 450];
  LineChart.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  LineChart.update();
});

$("#daily").click(function selectDaily() {
  $("#daily").addClass("background");
  $("#weekly").removeClass("background");
  $("#monthly").removeClass("background");
  $("#hourly").removeClass("background");
  LineChart.data.datasets[0].data = [50, 79, 86, 70, 66, 79, 50];
  LineChart.data.labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  LineChart.update();
});

 $("#weekly").click(function selectWeekly() {
  $("#weekly").addClass("background");
  $("#monthly").removeClass("background");
  $("#hourly").removeClass("background");
  $("#daily").removeClass("background");
  LineChart.data.datasets[0].data = [150, 379, 286, 370, 400, 145, 230];
  LineChart.data.labels = ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7"];
  LineChart.update();
});


$("#exit-svg1").click(function hideAlert() {
  $('.alert').addClass('hide');  
});

$("#exit-svg2").click(function hideAlert2() {
  $('.alert2').addClass('hide');  
});

$("#exit-svg3").click(function hideAlert3() {
 $('.alert3').addClass('hide');
});



var LineCHART = document.getElementById("lineChart");
var LineChart = new Chart(LineCHART, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            fill: true,
            lineTension: 0.1,
            backgroundColor: "",
            borderColor: "#7678B0",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: '',
            pointBorderColor: "#7678B0",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#7678B0",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [750, 350, 600, 500, 700, 500, 400, 350, 750, 350, 750, 450],
            spanGaps: false,
        }
    ]
},
  options: {
    responsive: true,
    scales: {
        yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-0",              
            ticks: {
              beginAtZero:true
                }
        }]
  },
  legend: {
  display: false,
    }
}
});

var BarCHART = document.getElementById("barChart").getContext("2d");
var BarChart = new Chart(BarCHART, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label:"",
            fill: true,
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor:"#7678B0",
        }
    ]
},
    options: {
      responsive: true,
        scales: {

        xAxes: [{
          barThickness: 35
        }],
        yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            ticks: {
            min: 50,
            max: 250,
            stepSize: 50
        }
        }]
    },
  legend: {
  display: false,
    }
}
});


var DoughnutCHART = document.getElementById("doughnutChart");
var DoughnutChart = new Chart(DoughnutCHART, {
    type: 'doughnut',
    data: {
    labels: ["Phones", "Tablets", "Desktops"],
    datasets: [
        {
            label:"",
            fill: true,
            borderColor: "#fff",
            data: [30, 40, 80],
            backgroundColor: [
                "#8AB4C2",
                "#5EBF81",
                "#7678B0"
            ]
        }
    ]
},
  options: {
    responsive: true,
  tooltips: {
    bodyFontSize: 30,
  },  
  legend: {
  display: false,
  }
 }   
});

$(window).on('scroll', function() {
    
    $('.grid').each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          var dashboard =  document.getElementById('dashboard-nav');
          var members =  document.getElementById('members-nav');
          var visits =  document.getElementById('visits-nav');
          var settings =  document.getElementById('settings-nav');
          var line =  document.getElementsByClassName('line');
       
        if (id == 0) {
          line[0].style.visibility = 'visible';
          dashboard.style.fill = '#fff';
         } else {
          line[0].style.visibility = 'hidden';
          dashboard.style.fill = '#D1D1D1';
         }  

        if (id == 1) {
          line[1].style.visibility = 'visible';
          members.style.fill = '#fff';
        } else {
        line[1].style.visibility = 'hidden';
        members.style.fill = '#D1D1D1';
      }

      if (id == 2) {
          line[2].style.visibility = 'visible';
          visits.style.fill = '#fff';
        } else {
        line[2].style.visibility = 'hidden';
        visits.style.fill = '#D1D1D1';
      }
      
      if (id == 3) {
          line[3].style.visibility = 'visible';
          settings.style.fill = '#fff';
        } else {
        line[3].style.visibility = 'hidden';
        settings.style.fill = '#D1D1D1';
      }
      
    } 
  });
});

$(window).on('load', function() {
var data = localStorage.getItem("onoffswitch1");
var data1 = localStorage.getItem("onoffswitch");

  $(function () {  
   if (data1 !== null) {
          $('#myonoffswitch').attr("checked", "checked");
      }
  });

  $(function () {
      if (data !== null) {
          $('#myonoffswitch2').attr("checked", "checked");
      }
  });
   
  $("#myonoffswitch").click(function(){
      if ($('#myonoffswitch').is(":checked")) {
          localStorage.setItem("onoffswitch", $('#myonoffswitch').val());
      } else {
          localStorage.removeItem("onoffswitch");
      }
    });

  $("#myonoffswitch2").click(function(){
     if ($('#myonoffswitch2').is(":checked")) {
          localStorage.setItem("onoffswitch1", $('#myonoffswitch2').val());
      } else {
          localStorage.removeItem("onoffswitch1");
      }
  });

  var select = document.querySelector(".select");
  var lastSelected = localStorage.getItem('select');

  if(lastSelected) {
      select.value = lastSelected; 
  }

  select.onchange = function () {
     lastSelected = select.options[select.selectedIndex].value;
     console.log(lastSelected);
     localStorage.setItem('select', lastSelected);
  };
});


$(".sendbtn").click(function validateForm() {
    var x = document.forms["form"]["txt"].value;
    if (x == "") {
        $("#message-validation1").css("visibility", "visible");
         $("#message-validation1").fadeOut(9000);
         $("#message-validation1").css("display", "initial");
         $("#message-validation1").fadeOut(9000);
    } else if (x !== "") {
        $("#message-confirmation").css("visibility", "visible");
        $("#message-confirmation").fadeOut(9000);
        $("#message-confirmation").css("display", "initial");
        $("#message-confirmation").fadeOut(9000);
    } 
});

$(".savebtn").click(function savedSettings() {
        $("#settings-confirmation").css("visibility", "visible");
        $("#settings-confirmation").fadeOut(9000);
        $("#settings-confirmation").css("display", "initial");
        $("#settings-confirmation").fadeOut(9000);
});


$(".dropbtn").click( function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
});
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
});
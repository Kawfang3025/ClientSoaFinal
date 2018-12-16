
getdata();
var appshowname;
function myFunction(a) {
  console.log(a);

  if (a == 5) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'
  } else if (a >= 4.5) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>'
  } else if (a >= 4) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>'
  } else if (a >= 3.5) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 3) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 2.5) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 2) {
    return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 1.5) {
    return '<i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 1) {
    return '<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else if (a >= 0.5) {
    return '<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  } else {
    return '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
  }
}

function getdata() {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/";
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    var appN = [];
    var type = [];
    var rate = [];
    let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;


    for (var i = 0; i < jsoutput.length; i++) {
      var installs = jsoutput[i].installs;
      var number1 = installs.replace(/\D/g, '');
      let numbers = number1;
      var rateBe = jsoutput[i].rating;
      if (numbers > a) {
        a = numbers;
        appN[0] = jsoutput[i].app;
        type[0] = jsoutput[i].type;
        rate[0] = parseFloat(rateBe);
      } else if (numbers > b) {
        b = numbers;
        appN[1] = jsoutput[i].app;
        type[1] = jsoutput[i].type;
        rate[1] = parseFloat(rateBe);
      } else if (numbers > c) {
        c = numbers;
        appN[2] = jsoutput[i].app;
        type[2] = jsoutput[i].type;
        rate[2] = parseFloat(rateBe);
      } else if (numbers > d) {
        d = numbers;
        appN[3] = jsoutput[i].app;
        type[3] = jsoutput[i].type;
        rate[3] = parseFloat(rateBe);
      } else if (numbers > e) {
        e = numbers;
        appN[4] = jsoutput[i].app;
        type[4] = jsoutput[i].type;
        rate[4] = parseFloat(rateBe);
      } else if (numbers > f) {
        f = numbers;
        appN[5] = jsoutput[i].app;
        type[5] = jsoutput[i].type;
        rate[5] = parseFloat(rateBe);
      }

    }


    console.log(a, b, c, d, e, f);

    for (var j = 0; j < 6; j++) {
      var Star = myFunction(rate[j]);
      document.getElementById("pop").innerHTML += '<div class="col-2" onclick="appDetail(`' + appN[j] + '`,`' + jsoutput[j].category + '`,`' + jsoutput[j].type + '`,`' + jsoutput[j].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/B3-BK659_Popula_J_20180814173353.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + appN[j] + '</h6><p class="card-text row">' + '<a class="col-12 text-primary">' + type[j] + '</a><a class="col text-warning">' + Star + '</a></p></div></div></div>';
    }
    // App 
    for (var k = 0; k < 60; k++) {
      var rating1 = jsoutput[k].rating;
      let numbers = parseFloat(rating1);
      var showStar = myFunction(numbers);
      var app = jsoutput[k].app;
      document.getElementById("result").innerHTML += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary">' + jsoutput[k].type + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
    }
  }
}

function searchAll(appname) {
  var xmlhttp = new XMLHttpRequest();
  var appname = appname.replace(/ /g, "%20");
  var url = "http://localhost:8080/app/" + appname;
  console.log(url);
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    // App 
    document.getElementById("showSearch").innerHTML = '';
    for (var k = 0; k < jsoutput.length; k++) {
      console.log(jsoutput[k].app);
      var app = jsoutput[k].app;
      var rating1 = jsoutput[k].rating;
      let numbers = parseFloat(rating1);
      var showStar = myFunction(numbers);
      var app = jsoutput[k].app;
      document.getElementById("showSearch").innerHTML += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary">' + jsoutput[k].type + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
    }
  }
}

function appDetail(x, y, z, ra) {
  var appname = x;
  var cate = y.replace(/_/g, " ")
  var type = z;
  var rating = parseFloat(ra);
  var showStar = myFunction(rating);

  document.getElementById("show").innerHTML = '<div class="container"><div class="jumbotron" style="margin-top:30px"><h1 class="display-3">' + appname + '</h1><p class="lead">' + cate + '</p><hr class="my-2"><p>' + type + '</p><p class="lead text-warning" >' + showStar + ' ' + ' <a class="lead text-dark">' + ra + '</a></p></div>'
  review(appname);
}

function review(appname) {
  var name = appname.replace(/ /g, "%20");
 
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/review/" + name;
  console.log(url);
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output1 = xmlhttp.responseText;
    var jsoutput = JSON.parse(output1);
    var data = '';
    let countnum = 0;
    for (var k = 0; k < jsoutput.length; k++) {
      countnum += 1;
      var color;
      if ((jsoutput[k].sentiment) == 'Positive') {
        color = 'success'
      } else if ((jsoutput[k].sentiment) == 'Negative') {
        color = 'danger'
      } else {
        color = 'dark'
      }

      if (k % 2 == 0) {
        data += '<li class="list-group-item list-group-item-primary"><p>' + jsoutput[k].translated_Review + '</p><p><b class="text-' + color + '">' + jsoutput[k].sentiment + '</b></p></li>';
      } else {
        data += '<li class="list-group-item list-group-item-light"><p>' + jsoutput[k].translated_Review + '</p><p><b class="text-' + color + '">' + jsoutput[k].sentiment + '</b></p></li>';
      }

    } console.log(countnum);
    document.getElementById("show").innerHTML += '<div style="margin-top:30px"><h2 style="margin-left:30px">Review from Users ('+countnum+')</h2><ul class="list-group" style="margin:40px">' + data + '</ul></div></div>'
  } else {
    document.getElementById("show").innerHTML += "No have Data"
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function showCate(cate) {
  console.log(cate);
  var cate1 = cate.replace(/ /g, "_");
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/category/" + cate1;
  console.log(url);
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    var data = '';

    for (var k = 0; k < jsoutput.length; k++) {
      console.log(jsoutput[k].app);
      var app = jsoutput[k].app;
      var rating = jsoutput[k].rating;
      let numbers = parseFloat(rating);
      var showStar = myFunction(numbers);
      data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
    }
    document.getElementById("show").innerHTML = '<div class="container-fluid " ><div style="margin-top:2%;margin-left:10%;margin-right:10%"><p><h2>' + cate + '</h2></p><div  class="row" >' + data + '</div></div></div>'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


}

function showType(type, num) {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/type/" + type;
  console.log(url);
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    var data = '';
    for (var k = (num - 1) * 30; k < (num * 30); k++) {
      console.log(jsoutput[k].app);
      var app = jsoutput[k].app;
      var rating = jsoutput[k].rating;
      let numbers = parseFloat(rating);
      var showStar = myFunction(numbers);

      data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
    }
    var page = '<div class="container-fluid"><ul class="nav justify-content-center list-unstyled mb-3 active bg-dark "><li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,1)">1</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,2)">2</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,3)">3</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,4)">4</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,5)">5</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,6)">6</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,7)">7</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,8)">8</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,9)">9</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,10)">10</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,11)">11</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,12)">12</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,13)">13</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,14)">14</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="showType(`' + type + '`,15)">15</a></li></ul></div>'
    document.getElementById("show").innerHTML = '<div class="container-fluid " ><div style="margin-top:2%;margin-left:10%;margin-right:10%"><p><h2>' + type + '</h2></p><div  class="row" >' + data + '</div></div></div>' + page;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

function getInstall() {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/";
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    var data = '';
    var app = [];
    var install = [];
    var cate = [];
    var type = [];
    var rate = [];
    let a = 0;

    for (var i = 0; i < jsoutput.length; i++) {
      var installs = jsoutput[i].installs;
      var number1 = installs.replace(/\D+/g, '');
      let numbers = number1;
      if (numbers > a) {
        a = numbers;


      }
    }

    let x = 0;
    for (var k = 0; k < jsoutput.length; k++) {

      var installs = jsoutput[k].installs;
      var numbers = installs.replace(/\D+/g, '');
      if (numbers === a) {
        app[x] = jsoutput[k].app;
        install[x] = jsoutput[k].installs;
        cate[x] = jsoutput[k].category;
        type[x] = jsoutput[k].type;
        rate[x] = jsoutput[k].rating;
        x = x + 1;
      }
    }

    //  console.log(app);

    for (var j = 0; j < app.length; j++) {
      //console.log(app[j]);
      data += '<div class="col-2" onclick="appDetail(`' + app[j] + '`,`' + cate[j] + '`,`' + type[j] + '`,`' + rate[j] + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app[j] + '</h6><p class="card-text row">' + '<a class="col-12 text-primary">' + install[j] + '</a><a class="col text-danger text-truncate">' + cate[j].replace(/_/g, " ") + '</a></p></div></div></div>';
      console.log(app[j], install[j], cate[j], rate[j]);

    }
  }
  document.getElementById("show").innerHTML = '<div class="container-fluid " ><div style="margin-top:2%;margin-left:10%;margin-right:10%"><p><h2>INSTALLS</h2></p><div  class="row" >' + data + '</div></div></div>';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function getallApp(num) {
  var data = '';
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/";
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    for (var k = (num - 1) * 30; k < (num * 30); k++) {
      var rating1 = jsoutput[k].rating;
      let numbers = parseFloat(rating1);
      var showStar = myFunction(numbers);
      var app = jsoutput[k].app;
      data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
    }
    var page = '<div class="container-fluid"><ul class="nav justify-content-center list-unstyled mb-3 active bg-dark "><li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(1)">1</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(2)">2</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(3)">3</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(4)">4</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(5)">5</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(6)">6</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(7)">7</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(8)">8</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(9)">9</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(10)">10</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(11)">11</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(12)">12</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(13)">13</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(14)">14</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getallApp(15)">15</a></li></ul></div>'
    document.getElementById("show").innerHTML = '<div class="container" ><p><h2>All APP</h2></p><div  class="row" >' + data + '</div></div>' + page;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

function showRate(rate) {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:8080/";
  console.log(url);
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var output = xmlhttp.responseText;
    var jsoutput = JSON.parse(output);
    var data = '';

    
    for (var k = 0; k < jsoutput.length; k++) {
      var rating = jsoutput[k].rating;
      let numbers = parseFloat(rating);
      var showStar = myFunction(numbers);
      var app = jsoutput[k].app;
      if (numbers == rate &&  rate == 5 ) {
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      } else if (numbers >=rate &&  rate == 4 &&  numbers < 5) {
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      } else if (numbers >=rate &&  rate == 3  &&  numbers < 4) {
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      }else if (numbers >=rate &&  rate == 2  &&  numbers < 3) {
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      }else if (numbers >=rate &&  rate == 1  &&  numbers < 2) {
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary text-truncate">' + (jsoutput[k].category).replace(/_/g, " ") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      }
        }
        if(rate == 5 ){
          document.getElementById("show").innerHTML = '<div class="container-fluid " ><div style="margin-top:2%;margin-left:10%;margin-right:10%"><p><h2>'+ rate +' Star</h2></p><div  class="row" >' + data + '</div></div></div>';
        }else{
          document.getElementById("show").innerHTML = '<div class="container-fluid " ><div style="margin-top:2%;margin-left:10%;margin-right:10%"><p><h2>'+ rate +' - ' +rate+'.9 Star</h2></p><div  class="row" >' + data + '</div></div></div>';
        }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
function getRangePage(){
  document.getElementById("show").innerHTML = '<form><div style="margin-left:10%;margin-right:10%" class="card-body row no-gutters align-items-center container">'+'<div class="col">'+
          '<input class="form-control form-control-lg form-control-borderless" id="installNum" type="search" placeholder="Search Number of Installs at least">'+
      '</div>'+'<div class="col-auto">'+'<a class="btn btn-lg btn-success" onclick="getInstallSearch(installNum.value,1)" >Search</a>'+'</div>'+'</div><form><div class="container row" style="margin-left:10%;margin-right:10%" id="showInstalls"></div>';

}
function getInstallSearch(num,page){
  if((num/num)==1){
    console.log(num);
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/installs/" + num;
    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var output = xmlhttp.responseText;
      var jsoutput = JSON.parse(output);
      var data = '';
      // App 
      document.getElementById("showInstalls").innerHTML = '';
      for (var k = (page-1)*30; k < page*30; k++) {
        console.log(jsoutput[k].app);
        var app = jsoutput[k].app;
        var rating1 = jsoutput[k].rating;
        let numbers = parseFloat(rating1);
        var showStar = myFunction(numbers);
        var app = jsoutput[k].app;
        data += '<div class="col-2" onclick="appDetail(`' + app + '`,`' + jsoutput[k].category + '`,`' + jsoutput[k].type + '`,`' + jsoutput[k].rating + '`)" style="height:350px;" ><div class="card" style="height:345px;"><img class="card-img-top" src="img/wjoel_180413_1777_android_001.1523625143.jpg"><div class="card-body"> <h6 class="card-title text-truncate">' + app + '</h6><p class="card-text row">' + '<a class="col-12 text-primary">' + (jsoutput[k].installs).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</a><a class="col text-warning">' + showStar + '</a></p></div></div></div>';
      }
      var page ='<div class="container-fluid"><ul class="nav justify-content-center list-unstyled mb-3 active bg-dark "><li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',1)">1</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',2)">2</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',3)">3</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',4)">4</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',5)">5</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',6)">6</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',7)">7</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',8)">8</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',9)">9</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',10)">10</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',11)">11</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',12)">12</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',13)">13</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',14)">14</a></li>' +
      '<li class="nav-item"><a class="nav-link cColor" href="#" onclick="getInstallSearch('+num+',15)">15</a></li></ul></div>'
      document.getElementById("showInstalls").innerHTML += data+page
    }else{
      document.getElementById("showInstalls").innerHTML ='<div class="alert alert-warnning">'+
      '<strong>Warning!</strong> No Data!!!!.'+
    '</div>'
    }

  }else{
    document.getElementById("showInstalls").innerHTML =
    '<div class="alert alert-danger">'+
    '<strong>Danger!</strong> Please try again, Only Digit!!!!.'+
  '</div>'
  }
}
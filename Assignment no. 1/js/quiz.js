// to check answer of question no. 1
function checkCorrectAnswer1() {
	var correctAnswer = document.getElementsByName('rightAnswer').value;
	var answer;
	var radios = document.getElementsByName('answer');
	var quant_score=0;
	var quant_count = 1;
	var quant_correct = 0;

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}
	if(answer == "c") {
		quant_score = 10;
		quant_correct = 1;
		
	}

	var url = "question2.html";

	var queryVars = {'quantCount':quant_count, 'quantCorrect': quant_correct ,'quantScore':quant_score };
		
	appendQueryString(url, queryVars);		
	//passing parameters through url to the next page

	var new_url = appendQueryString(url, queryVars);
	
	window.location.href = new_url;

	}
		
	
	//function to append to the query string
	function appendQueryString(url, queryVars) {
    var firstSeperator = (url.indexOf('?')==-1 ? '?' : '&');
    var queryStringParts = new Array();
    for(var key in queryVars) {
        queryStringParts.push(key + '=' + queryVars[key]);
    	}
    var queryString = queryStringParts.join('&');
    return url + firstSeperator + queryString;
	}

		
	// function to check answer of question no. 2
function checkCorrectAnswer2() {
	var correctAnswer = document.getElementsByName('rightAnswer').value;
	var answer;

	var a = parseInt(QueryString.quantCount) + 1;
	var b = parseInt(QueryString.quantScore);
	var c = parseInt(QueryString.quantCorrect);
	var quant_count = a.toString();


	
	var radios = document.getElementsByName('answer');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}
	//check if selected answer is a or not
	if(answer == "a") {
		quant_score = parseInt(QueryString.quantScore) + 10;
		quant_correct = quant_score / 10;
	
	}
	else{
		quant_score = parseInt(QueryString.quantScore);
		quant_correct = quant_score / 10;
	}

	//append parameters to the url
	var url = "question3.html";
	var queryVars = {'quantCorrect': quant_correct ,'quantCount': quant_count, 'quantScore':quant_score };
	appendQueryString(url, queryVars);			
	var new_url = appendQueryString(url, queryVars);
	window.location.href = new_url;
	
	
}

function checkCorrectAnswer3() {
	var correctAnswer1 = document.getElementsByName('rightAnswer1').value;
	var correctAnswer2 = document.getElementsByName('rightAnswer2').value;
	var answer1;
	var answer2;
	var verbal_score=0;
	var verbal_count = 1;
	var verbal_correct = 0;


	var radios = document.getElementsByName('blank1');

	var quant_count = parseInt(QueryString.quantCount);
	var quant_score = parseInt(QueryString.quantScore);
	var quant_correct = parseInt(QueryString.quantCorrect);



	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer1 = radios[i].value;
			break;
		}
	}
	
	var radios = document.getElementsByName('blank2');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer2 = radios[i].value;
			break;
		}
	}

	if((answer1 == "$650") && (answer2 == "Twitter")) {
		verbal_score = 10;
		verbal_correct = 1;
		
	}

	
	var url = "question4.html";

	var queryVars = {'quantCorrect': quant_correct ,'quantCount': quant_count, 'quantScore':quant_score , 'verbalCorrect' : verbal_correct, 'verbalCount' : verbal_count, 'verbalScore' : verbal_score};
		
	appendQueryString(url, queryVars);			
	var new_url = appendQueryString(url, queryVars);
	
	window.location.href = new_url;
}






var QueryString = function () {
 
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();







function checkCorrectAnswer4() {
	var correctAnswer = document.getElementsByName('rightAnswer').value;
	var answer;
	var radios = document.getElementsByName('answer');

	var quant_count = parseInt(QueryString.quantCount);
	var quant_score = parseInt(QueryString.quantScore);
	var quant_correct = parseInt(QueryString.quantCorrect);

	var verbal_count = parseInt(QueryString.verbalCount);
	var verbal_score = parseInt(QueryString.verbalScore);
	var verbal_correct = parseInt(QueryString.verbalCorrect);

	var video_score = 0;
	var video_count = 1;
	var video_correct = 0;

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}

	if(answer == "a") {
		video_correct = 1;
		video_score = 10;

	}

	var url = "survey.html";

	var queryVars = {'quantCorrect': quant_correct ,'quantCount': quant_count, 'quantScore':quant_score , 'verbalCorrect' : verbal_correct, 'verbalCount' : verbal_count, 'verbalScore' : verbal_score, 'videoCount' : video_count, 
'videoCorrect' : video_correct, 'videoScore' : video_score};
		
	appendQueryString(url, queryVars);			
	var new_url = appendQueryString(url, queryVars);
	
	window.location.href = new_url;

	
	
}

function calculateScore(){
	var quant_count = parseInt(QueryString.quantCount);
	var quant_score = parseInt(QueryString.quantScore);
	var quant_correct = parseInt(QueryString.quantCorrect);

	var verbal_count = parseInt(QueryString.verbalCount);
	var verbal_score = parseInt(QueryString.verbalScore);
	var verbal_correct = parseInt(QueryString.verbalCorrect);

	var video_count = parseInt(QueryString.videoCount);
	var video_score = parseInt(QueryString.videoScore);
	var video_correct = parseInt(QueryString.videoCorrect);

	var url = "summary.html";

	var queryVars = {'quantCorrect': quant_correct ,'quantCount': quant_count, 'quantScore':quant_score , 'verbalCorrect' : verbal_correct, 'verbalCount' : verbal_count, 'verbalScore' : verbal_score, 'videoCount' : video_count, 
'videoCorrect' : video_correct, 'videoScore' : video_score};
		
	appendQueryString(url, queryVars);			
	var new_url = appendQueryString(url, queryVars);
	
	window.location.href = new_url;

}



function markBlank1() {
	var answer;
	var radios = document.getElementsByName('blank1');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}
	document.getElementById("fill1").innerHTML = ""+answer;
}


function markBlank2() {
	var answer;
	var radios = document.getElementsByName('blank2');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}
	document.getElementById("fill2").innerHTML = ""+answer;
}


	// generate the score by fetching parameters from the url.
function scoreGenerator() {

	var quant_count = parseInt(QueryString.quantCount);
	var quant_score = parseInt(QueryString.quantScore);
	var quant_correct = parseInt(QueryString.quantCorrect);

	var verbal_count = parseInt(QueryString.verbalCount);
	var verbal_score = parseInt(QueryString.verbalScore);
	var verbal_correct = parseInt(QueryString.verbalCorrect);

	var video_count = parseInt(QueryString.videoCount);
	var video_score = parseInt(QueryString.videoScore);
	var video_correct = parseInt(QueryString.videoCorrect);

	var total_score = parseInt(QueryString.videoScore) + parseInt(QueryString.verbalScore) + parseInt(QueryString.quantScore);
	
	document.getElementById("quant_count").innerHTML = ""+quant_count;
	document.getElementById("verbal_count").innerHTML = ""+verbal_count;
	document.getElementById("video_count").innerHTML = ""+video_count;
	
	document.getElementById("quant_correct").innerHTML = ""+quant_correct;
	document.getElementById("verbal_correct").innerHTML = ""+verbal_correct;
	document.getElementById("video_correct").innerHTML = ""+video_score;
	
	document.getElementById("quant_score").innerHTML = ""+quant_score ;
	document.getElementById("verbal_score").innerHTML = ""+verbal_score;
	document.getElementById("video_score").innerHTML = ""+video_score ;

	document.getElementById("total_score").innerHTML = "" + total_score;
}





















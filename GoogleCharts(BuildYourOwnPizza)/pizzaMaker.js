document.querySelector('input[type=submit]').addEventListener('click', myAction);

                function getValues(){
               
                    var cheeseCheckbox = document.getElementsByName('cheeseCheckbox');

                    var crust = document.getElementsByName('crust');
                    
                    var cheeseWeight = document.getElementById('cheeseWeight').value;

                    var sauceCheckbox = document.getElementsByName('sauce');

                    var sauceType = document.getElementsByName('sauceType');

                    var sauceWeight = document.getElementsByName('sauceWeight');
                    
                    
                    var value1 = [];
                    var value2 = [];
                    var value3 = [];

                    weights= document.querySelectorAll('input:checked ~ .weight');
                         
                                     
                    for(var i = 0 ; i < weights.length ; i++) {
                                value1.push(["Topping"])
                                value2.push([weights[i].id]);
                                value3.push([weights[i].value]);
                              }

                    for (var i=0, n=crust.length;i<n;i++) {
                        if (crust[i].checked) {
                            value1.push(["Crust"])
                           value2.push([crust[i].id]);
                           value3.push([crust[i].value]);
                       }
                   }

                   for (var i=0, n=cheeseCheckbox.length;i<n;i++) {
                      if (cheeseCheckbox[i].checked) 
                      {

                          value1.push(["Cheese"]);
                          value2.push(["CheeseWeight"]);
                          value3.push([cheeseWeight]);
                          

                      }
                   }
                    
                    for (var i=0, n=sauceWeight.length;i<n;i++) {
                      if (sauceCheckbox[0].checked && sauceType[i].checked) 
                        {
                
                        value1.push(["Sauce"]);
                        value2.push([sauceType[i].value]);
                        value3.push([sauceWeight[i].value]);
                           
                        }

                     }
                       // alert("vals array is "+value1 + value2 + value3);
                   var url = "pizza.html";

    var queryVars = {'value1':value1, 'value2': value2, 'value3' : value3 };
        
    appendQueryString(url, queryVars);      
    //passing parameters through url to the next page

    var new_url = appendQueryString(url, queryVars);
    
    window.location.href = new_url;
                  
                  

              }

              function appendQueryString(url, queryVars) {
    var firstSeperator = (url.indexOf('?')==-1 ? '?' : '&');
    var queryStringParts = new Array();
    for(var key in queryVars) {
        queryStringParts.push(key + '=' + queryVars[key]);
        }
    var queryString = queryStringParts.join('&');
    return url + firstSeperator + queryString;
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



function PasswordCheck()
    {

      var pass1= document.getElementById("password").value;  
      var pass2= document.getElementById("verifypassword").value;  

      if (pass1 != pass2)
      {
        document.getElementById("img1").style.display = 'none';
        document.getElementById("verifypassword").style.borderColor="red";
        document.getElementById("span3").innerHTML = "Wrong Password! Please try again.";
      }
      else
      { 
        document.getElementById("img1").style.display = 'block';
        document.getElementById("verifypassword").style.borderColor="black";
        document.getElementById("span3").innerHTML = "Password Matched";
      }
    }

    function submitRegistrationForm()
    {
      sessionStorage.setItem("User ID",0);
      var user = document.getElementById("userid");
      sessionStorage.setItem("User ID", user.value);


      sessionStorage.setItem("Password",0);
      var pass = document.getElementById("password");
      sessionStorage.setItem("Password", pass.value);


      sessionStorage.setItem("Email",0);
      var email = document.getElementById("email_addr");
      sessionStorage.setItem("Email", email.value);


      sessionStorage.setItem("Question1",0);
      var questionone = document.getElementById("question1");
      sessionStorage.setItem("Question1", questionone.value);


      sessionStorage.setItem("Answer1",0);
      var answerone = document.getElementById("answer1");
      sessionStorage.setItem("Answer1", answerone.value);


      sessionStorage.setItem("Birthdate",0);
      var bDate = document.getElementById("birthDate");
      sessionStorage.setItem("Birthdate", bDate.value);


      sessionStorage.setItem("Question2",0);
      var questiontwo = document.getElementById("question2");
      sessionStorage.setItem("Question2", questiontwo.value);


      sessionStorage.setItem("Answer2",0);
      var answertwo = document.getElementById("answer2");
      sessionStorage.setItem("Answer2", answertwo.value);

   
      sessionStorage.setItem("Phone",0);
      var telephone = document.getElementById("mobile");
      sessionStorage.setItem("Phone", telephone.value);

      
      sessionStorage.setItem("Address Line1",0);
      var line1 = document.getElementById("addressline1");
      sessionStorage.setItem("Address Line1", line1.value);

  
    }

    
    function verifyEmail()
    {
      var email1= document.getElementById("email_addr").value;  
      var email2= document.getElementById("vemail_addr").value;  
            
      if (email1 != email2)
      {
     

         document.getElementById("img2").style.display = 'none';
        document.getElementById("vemail_addr").style.borderColor="red";
        document.getElementById("span2").innerHTML = "Wrong Email Entered! Please try again.";

      }
      else
      {   
        document.getElementById("span2").innerHTML = ""     
        document.getElementById("img2").style.display = 'block';
        document.getElementById("vemail_addr").style.borderColor="black"; 
         document.getElementById("span2").innerHTML = "Email Address Matched";
      } 
    }
  
function calculateStrength()
    {

      var level;
      var passwordLength = document.getElementById("password").value.length;
      var min = 7;
      var max = 20;
      var pass = document.getElementById("password").value;
      var progressBar = document.getElementById('progressBar');
    
        var hasDigits = /[0-9]/.test(pass);
        var expression = /[!@#$%^&*.]/.test(pass);
        var upperCase= /[A-Z]/.test(pass);
        var lowerCase= /[a-z]/.test(pass);

        var user = document.getElementById("userid").value;
        
        if(user == pass && pass != null)
        {
          alert("Password cannot be same as User Id!");
          progressBar.value = 0;
          document.getElementById("password").value="";
          document.getElementById("password").focus();
          document.getElementById("span1").innerHTML = "";
        }
        else
           if(pass.indexOf(' ') >=0)
          {  
            progressBar.value = 0;
            document.getElementById("password").value="";
            document.getElementById("password").focus();
            document.getElementById("span1").innerHTML = "";
          }
         else 
         {    
          if(passwordLength <= min )
          {
            progressBar.value = 10;
            document.getElementById("span1").innerHTML = "Weak";
          }
          else if (passwordLength > min && passwordLength <= max)
          {
            if(hasDigits || expression || lowerCase || upperCase)
            { 
              if(expression)
              {
                if(hasDigits)
                {
                  if(lowerCase)
                  {
                    if(upperCase)
                    {
                // aplha + num + special
                progressBar.value= 100;
                document.getElementById("span1").innerHTML = "Strong";
              }
              else
              {
                // alpha + special
                progressBar.value=60;
                document.getElementById("span1").innerHTML = "Medium";
              }
            }
          else
            {
              // only alpha and numbers
              progressBar.value=60;
              document.getElementById("span1").innerHTML = "Medium";
            }
          }
          
          else
              {
                progressBar.value=20; 
                document.getElementById("span1").innerHTML = "Weak";
              }   
            }    
        }  
      }
    }
  }



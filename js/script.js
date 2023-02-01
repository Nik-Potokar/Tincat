function openTab(tabName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = "#ccc";
  }
  
  window.onload = function() {
    document.getElementById("defaultOpen").click();
  };


  function submitLoginForm() {
    let username = document.querySelector('#login-form input[type="text"]').value;
    let password = document.querySelector('#login-form input[type="password"]').value;
  
    if (username !== '' && password !== '') {
      // Show success message
      let successMessage = document.createElement('div');
      successMessage.innerHTML = '<i class="fa fa-check"></i> Successful Login';
      successMessage.style.cssText = 'color: green; font-size: 20px;';
      document.querySelector('#login-form').appendChild(successMessage);
    }
  }
  
  function submitRegisterForm() {
    let username = document.querySelector('#register-form input[type="text"]').value;
    let email = document.querySelector('#register-form input[type="email"]').value;
    let password = document.querySelector('#register-form input[type="password"]').value;
  
    if (username !== '' && email !== '' && password !== '') {
      // Show success message
      let successMessage = document.createElement('div');
      successMessage.innerHTML = '<i class="fa fa-check"></i> Successful Register';
      successMessage.style.cssText = 'color: green; font-size: 20px;';
      document.querySelector('#register-form').appendChild(successMessage);
    }
  }

  setTimeout(function() {
    document.getElementById("success-text").style.display = "none";
  }, 2000);
  

  const images = document.querySelectorAll('.gallery img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // Show a larger version of the image
    });
  });

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
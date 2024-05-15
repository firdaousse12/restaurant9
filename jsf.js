document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var status = document.getElementById('status');
    
    fetch('/path/to/contact', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        status.innerHTML = data.message;
        document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
        status.innerHTML = 'Oops! There was a problem submitting your form.';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
      });
    });
  });

  document.getElementById('reserve-btn').addEventListener('click', function() {
    document.getElementById('reservation-form').classList.add('active');
  });
  
  document.getElementById('reservation-form-data').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
    
  
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Number of Guests:', guests);
    
    
    document.getElementById('reservation-form-data').reset();
    document.getElementById('reservation-form').classList.remove('active');
  });
  
  
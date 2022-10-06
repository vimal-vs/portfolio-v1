// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


function sendMail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "",
      Password : "",
      To : "",
      From : document.getElementById('email').value,
      Subject : "Portfolio : Contact Form",
      Body : document.getElementById('message-text').value,
  }).then(
  alert('Your message has been sent successfully.')
  );
  window.location.reload();
}

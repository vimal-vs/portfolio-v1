// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASMnZJCZPTWPTOOJntw_KD8N6nP0gDMUY",
  authDomain: "vimalvs.firebaseapp.com",
  projectId: "vimalvs",
  storageBucket: "vimalvs.appspot.com",
  messagingSenderId: "268884465108",
  appId: "1:268884465108:web:b97def5f5c1f9831eab241",
  measurementId: "G-S3SBFB27PS"
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
      Username : "passgen.pybot@gmail.com",
      Password : "5F2A4A21A5273FE9A98F4626313BECF4E21D",
      To : "vv4861@srmist.edu.in",
      From : document.getElementById('email').value,
      Subject : "Portfolio : Contact Form",
      Body : document.getElementById('message-text').value,
  }).then(
  alert('Your message has been sent successfully.')
  );
  window.location.reload();
}
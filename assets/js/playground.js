// var submitButtonText = submitButton.querySelector("a");

var formElement = document.querySelector("#send_form");
var formMessage = document.querySelector("#sent_message");
var submitButton = formElement.querySelector("button");

var VS_API = `UhiF1ykQzKTeqW5p2qpSvFNS6dM3Ya3i`;
var VS_ENP = `https://play-apis.vasern.com/signups`;

formElement.onsubmit = function(ev) {
  ev.preventDefault();
  var email = document.querySelector("#user_email");
  var name = document.querySelector("#user_name");
  if (email.value && name.value) {
    submitButton.innerText = "Sending...";
    fetch(VS_ENP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VS_API}`
      },
      body: JSON.stringify({
        email: email.value,
        name: name.value
      })
    }).then(rs => {
      if (rs.status == 200) {
        submitButton.innerText = "Sent";
        email.value = "";
        name.value = "";
        localStorage.setItem("category_viewed", true);
      } else {
        submitButton.innerText = "Submit";
      }
    });
  }
};

//
if (localStorage.getItem("category_viewed")) {
  formElement.classList.add("hidden");
} else {
  formMessage.classList.add("hidden");
}

const emailReceiver = "debbytri58@gmail.com";

function submitForm() {
  // Parsing data / Get data --------------------------------------
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("phone-number").value;
  let gender = document.getElementById("gender").value;
  let message = document.getElementById("your-message").value;
  /* let cek= document.getElementById("cek").ariaChecked; */


  /* ================== Validation =============================== */
  if (name == "") {
    return alert("Name input fields must be not empty");
  } else if (email == "") {
    return alert("Email input fields must be not empty");
  } else if (phone == "") {
    return alert("Phone input fields must be not empty");
  } else if (gender == "") {
    return alert("Subject input fields must be not empty");
  } else if (message == "") {
    return alert("Message input fields must be not empty");
  }

  /* ================ Mail to =========================== */
  const a = document.createElement("a");
  // a.href = 'mailto:' + emailReceiver + 'gender=' + subject + 'body=Hello my name ' + name + ', ' + subject + ',' + message;
  a.href = `mailto:${emailReceiver}?gender=${gender}&body=Hello my name ${name}, ${gender}, ${message}`;
  a.click();

  /* =============Store data to object ============ */
  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    gender: gender,
    message: message,
  };
  console.log(dataObject);
}

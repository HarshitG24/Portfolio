const sendBtn = document.getElementsByClassName("send_btn")[0];

sendBtn.addEventListener("click", () => {
    // Fetching all the elements
    const fullNameField = document.getElementById("fullName");
    const emailField = document.getElementById("yourEmail");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");

    // Fetching the values out
    let str = "The following details are sent to Harshit Gajjar: \n";
    str += "Name: " + fullNameField.value + " \n";
    str += "Email: " + emailField.value + " \n";
    str += "Subject: " + subjectField.value + " \n";
    str += "Message: " + messageField.value + " \n";

    // Clearing the fields to empty after button click
    fullNameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    messageField.value = "";

    alert(str);
});

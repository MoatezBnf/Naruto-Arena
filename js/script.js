function SignInControl(){
    if (document.getElementById("email").value=="" || document.getElementById("password").value==""){
        alert("All fields are mandatory.");
    }
}
function RegisterControl(){
    if (document.getElementById("registerName").value=="" || document.getElementById("registerUsername").value=="" || 
    document.getElementById("registerEmail").value=="" || document.getElementById("registerPassword").value=="" ||
    document.getElementById("registerRepeatPassword").value=="" ){
        alert("All fields are mandatory.");   
    }
}
function ResetPass(){
    if (document.getElementById("resetemail").value==""){
        alert("All fields are mandatory.")
    }
}
$('#loginmodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})
$('#registermodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})
$('#resetmodal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})


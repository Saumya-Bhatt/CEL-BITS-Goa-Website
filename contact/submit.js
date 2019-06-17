$('#contact_form').submit(function(event)
{
    event.preventDefault();
    submitform();
});

function submitform()
{
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").value();

    $.ajax({
        type:"POST",
        url:"form-mailer.php",
        data:"name=" + name + "&email=" + email + "&message=" + message,
        success: function(text)
        {
            if(text=="success")
            {
                formSuccess;
            }
        }
    });

    function formSuccess()
    {
        $("#message_submit").removeClass("hidden");
    }
}
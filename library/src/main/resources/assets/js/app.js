$(":button").click(function(){
	var isbn=this.id;
	alert('About to report lost on ISBN' + isbn);
	$.ajax({
        type: "PUT",
        url: "http://localhost:8001/library/v1/books/" +  isbn + "?status=lost",
        contentType: "application/json; charset=utf-8",       
        dataType: "json",
        data:{status:'lost'},
        complete: function (xhr, status) {
            if (xhr.status!=200) {
                debugger;//handle error
                alert(xhr.status);
            }else{
            	//successful
            	$('#'.concat(isbn)).attr("disabled", true);
            	$('#status_'.concat(isbn)).html('lost');
            }
        }
    });     
	
}); 
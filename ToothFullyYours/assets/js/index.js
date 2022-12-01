$("#add_employee").submit(function(event){
    let employeeID = 0
    employeeID += 1;
    document.getElementById("e_ID") = employeeID;
    alert("Data Inserted Successfully!")
})

$("#update_employee").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n["value"]
    })

    console.log(data);

    var request = {
        "url":`http://localhost:5000/api/employee/${data.id}`,
        "method": "PUT",
        "data": data    
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })

    })


    $(document).ready(function($) {
        $(".clickable-row").click(function() {
            $("tbody tr").removeClass("active")
            $(this).addClass("active")
     
       
        });

        $(".clickable-row").dblclick(function() {
            $(this).removeClass("active")
        });
    });


if(window.location.pathname == "/Request"){
        $ondelete = $("#add-appointmentRequest tbody tr td a.delete");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/api/appointmentRequest/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to confirm this appointment request?")){
                $.ajax(request).done(function(response){
                    alert("Appointment Request Confirmed Successfully");
                    location.reload();
                })
            }
        })
    }

    if(window.location.pathname == "/Request"){
        $ondelete = $("#add-appointmentRequest tbody tr td a.delete1");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/api/appointmentRequest/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to delete this appointment request?")){
                $.ajax(request).done(function(response){
                    alert("Appointment Request Deleted Successfully");
                    location.reload();
                })
            }
        })
    }

    $("#search-box").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

if(window.location.pathname == "/appointment"){
        $ondelete = $("#add-appointment tbody tr td a.delete");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/appointment/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to confirm this appointment?")){
                $.ajax(request).done(function(response){
                    alert("Appointment Confirmed Successfully");
                    location.reload();
                })
            }
        })
    }

if(window.location.pathname == "/history"){
        $ondelete = $("#add-history tbody tr td a.delete");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/history/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to confirm this transaction?")){
                $.ajax(request).done(function(response){
                    alert("Transaction Confirmed Successfully");
                    location.reload();
                })
            }
        })
    }

    
if(window.location.pathname == "/employee"){
    $ondelete = $("#add-employee tbody tr td a.delete");
    $ondelete.click(function(){

        var id = $(this).attr("data-id")
        var request = {
            "url":`http://localhost:5000/api/employee/${id}`,
            "method": "DELETE"
        }    

        if(confirm("Do you want to remove this employee?")){
            $.ajax(request).done(function(response){
                alert("Employee Profile Deleted Successfully");
                location.reload();
            })
        }
    })
}


    

function verification(){
    if (document.getElementById("p1").value == document.getElementById("p2").value) {
      document.getElementById("Message").style.color = "Green";
      document.getElementById("Message").style.fontSize = "10px";
      document.getElementById("Message").innerHTML = "Passwords match!"
      return true;
    } else {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").style.fontSize = "10px";
      document.getElementById("Message").innerHTML = "Passwords do NOT match!"
      return false;
    }
  }
  
  function validateForm()
  {
  
      return false;
  }
  
  function validateUserName(){
     var username = document.getElementById("username").value;
     var userdb =  req.body.p_name().value;
  
     if(username == userdb){
      alert("Invalid Username")
      return false;
     }else{
      return true;
     }
  }

  function counter(){
    var employeeID = document.getElementById('e_ID').value;
    var counter = 1

        employeeID += counter
        document.getElementById("e_ID").innerText = employeeID
     
  }
  
  


  $("#update_history").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n["value"]
    })

    console.log(data);

    var request = {
        "url":`http://localhost:5000/api/history/${data.id}`,
        "method": "PUT",
        "data": data    
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })

})


    $(document).ready(function($) {
        $(".clickable-row").click(function() {
            $("tbody tr").removeClass("active")
            $(this).addClass("active")
     
       
        });

        $(".clickable-row").dblclick(function() {
            $(this).removeClass("active")
        });
    });


    

    


$("#add_item").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_item").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:5000/api/items/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/Inventory"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:5000/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}

if(window.location.pathname == "/Patient"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:5000/api/patients/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}

if(window.location.pathname == "/finance"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:5000/api/finance/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}

$("#update_finance").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:5000/api/finance/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})


function dateString(){
    let adate = document.getElementById("adate")
    alert(adate)
}   



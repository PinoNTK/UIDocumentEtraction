 $("#myTable").find("input").each(function(index){
      if ($(this).prop('checked')==true){ 
        var key = $('#'+index.toString()).text();
        console.log(key)
        $("p").mark(key, {
          "element": "span",
          "className": "highlight"
        });
      }
    });
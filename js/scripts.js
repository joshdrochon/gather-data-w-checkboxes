$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode =  $(this).val();
      $("#work-responses").append("<li>" + workTransportationMode + "</li>");
    });

    $("input:checkbox[name=rec-transportation]:checked").each(function(){
      var recTransportationMode = $(this).val();
      $("#rec-responses").append("<li>" + recTransportationMode + "</li>");
    });


    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
});


// Here, we attach a .submit() listener to our form. When the form is submitted, we display our
// work_responses <span>.

// Then, we use the jQuery selector$("input:checkbox[name=work-transportation]:checked")
// to target all checkboxes the user has selected. This is a much longer selector than we've
// previously used. Let's break it down together:
//
// The input:checkbox portion of this selector targets <input> fields of the type checkbox.
// [name=work-transportation] further narrows our search. In addition to targeting only
// <input> fields of the checkbox type, the name attribute of the field must also be work-transportation.
// The :checked portion narrows it down even further. In addition to targeting only <input>
// fields of the checkbox type with a name attribute of work-transportation, we only want to
// retrieve checked checkboxes that meet these requirements.

// Continuing to walk through the example above, we use a .each() loop to cycle through each
// checkbox meeting these qualifications. .each() is simply the jQuery-specific version of the
// JavaScript forEach() loops we've been using this week.
//
// Then, for each checkbox, we determine its value by calling $(this).val();. this refers
// to the current checkbox being cycled over by the loop. Calling .val() on this retrieves the
// "value" attribute from that checkbox's HTML. We assign this value to the variable
// workTransportationMode. Then, we then append this information (and a <br>) to our
//  work-responses span.

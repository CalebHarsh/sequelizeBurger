
$(".form-select").on("submit", function (e) {
  e.preventDefault()
  var value = $("#burger").val()
  if (value != 0) {
    var burgerObj = {
      burger_name: value,
      burger_img: $("#display").attr("src")
    }
    $.ajax("api/burgers", {
      method: "POST",
      data: burgerObj
    }).then(result => {
      window.location.pathname = "/" + result.id
    })
  } else {
    alert("Please Pick a Burger First")
  }
})


$("#devoured").on("click", function (e) {
  if ($("#customer").val().trim() != "") {
    var id = $("#name").data("id")
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: {
        customer_name: $("#customer").val().trim(),
        BurgerId: id
      }
    }).then(res => {
      window.location.pathname = "/"
    })
  } else {
    alert("Must enter your name first")
  }
})

$("#burger").change(e => {
  var value = $("#burger").val()
  console.log(value)
  if (value != 0) {
    var disImg = value.toLowerCase().replace(" ", "_") + ".jpg"
    $("#display").attr("src", "assets/imgs/" + disImg)
  }
  else {
    $("#display").attr("src", "assets/imgs/none.jpg")
  }
})
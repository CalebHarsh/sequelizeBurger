var plate_full = false

$(".form-select").on("submit", function (e) {
  e.preventDefault()
  if ($("#burger").val() != 0) {
    var burger_name = $("#burger").val()
    $(".select").data("burger", burger_name)
    var burgImg = burger_name.toLowerCase().replace(" ", "_") + ".jpg"
    $(".select img").attr("src", "assets/imgs/" + burgImg)
  } else {
    alert("Please Pick a Burger First")
  }
})

$("#move-plate").on("click", function (e) {
  if (!plate_full && $(".select img").attr("src") != "assets/imgs/none.jpg") {
    var src = $(".select img").attr("src")
    var burgerObj = {
      burger_name: $(".select").data("burger")
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerObj
    }).then(res => {
      $(".select img").attr("src", "assets/imgs/none.jpg")
      $(".eat").data("id", res.id)
      $(".eat img").attr("src", src)
      plate_full = true
    })
  } else {
    alert("Eat everything on your plate first")
  }
})

$("#devoured").on("click", function (e) {
  if (plate_full) {
    var id = $(".eat").data("id")
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(res => {
      $(".eat img").attr("src", "assets/imgs/none.jpg")
      $(".eat").data("id", null)
      plate_full = false
    })
  } else {
    alert("You most first move a burger to a your plate")
  }

})
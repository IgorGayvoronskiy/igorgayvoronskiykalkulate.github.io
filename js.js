function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    return f1[0].value*f2[0].value;
    return false;
}

function onClick() {
    alert(click1() + " ₽");
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", onClick);
  });

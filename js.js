function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = f1[0].value*f2[0].value;
    if(!r[0]) {
      return "Error";
    }
    return r;
}

function onClick() {
    alert(click1());
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", onClick);
  });

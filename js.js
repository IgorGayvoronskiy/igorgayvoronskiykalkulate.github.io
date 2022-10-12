function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    if(f1[0].value*f2[0].value) {
       r.innerHTML = f1[0].value*f2[0].value + " ₽";
       return f1[0].value*f2[0].value + " ₽";
    }
    else{
      r.innerHTML = "Error";
      return "Error"
    }
    return false;
}

function onClick() {
  let r = document.querySelectorAll("#checkboxe input");
  if(r[0].checked) {
    alert(click1());
  }
  else {
    click1();
  }
}

function updatePrice() {
  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");
  
  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }s
  });

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementsByName("field1");
  prodPrice[0].value = price;
}

function getPrices() {
  return {
    prodTypes: [100, 200, 150],
    prodOptions: {
      option2: 10,
      option3: 5,
    },
    prodProperties: {
      prop1: 1,
      prop2: 2,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
    // let b = document.getElementById("button1");
    // b.addEventListener("click", onClick);
  // Скрываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  
  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
    onClick();
  });
  
  // Назначаем обработчик радиокнопок.  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
      onClick();
    });
  });

    // Назначаем обработчик checkboxe.  
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
      onClick();
    });
  });

  let i = document.getElementsByName("field2")
  let input = i[0];
  input.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    onClick();
  });


  updatePrice();
});

document.querySelectorAll(".item").forEach(box => {
    box.addEventListener("click", () => {
      const group = box.getAttribute("data-group");
      
      // deselect item by clicking another item in same column as only one can be selected at the same time
      document.querySelectorAll(`.item[data-group='${group}']`).forEach(el => {
        el.classList.remove("selected");
      });
  
      // select item - css changes its color to green
      box.classList.add("selected");
    });
  });
  
  document.getElementById("start").addEventListener("click", () => {
    alert("Wash started! Preferences saved.");
    // redirect to active load page on submission click
    window.location.href = "status.html";
  });
// Change the text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
    const intro = document.getElementById("intro");
    intro.textContent = "The text has been changed using JavaScript!";
  });
  
  // Toggle a CSS class to change style
  document.getElementById("toggle-style-btn").addEventListener("click", function () {
    const heading = document.getElementById("main-heading");
    heading.classList.toggle("highlight");
  });
  
  // Add a new paragraph
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const container = document.getElementById("paragraph-container");
    const newPara = document.createElement("p");
    newPara.textContent = "This paragraph was added dynamically.";
    container.appendChild(newPara);
  });
  
  // Remove the last added paragraph
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    const container = document.getElementById("paragraph-container");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  });
  
window.onload = () => {
  // implement active class to active navigation anchors
  const nav = document.getElementById("nav");
  const navs = nav.getElementsByClassName("nav__list__a");
  for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // implement form data handling and insert into modal window
  const form = document.getElementById("form");
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const modal = document.getElementById("modal");
    const content = modal.querySelector('#content');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `The letter was sent  <br/>
    ${formData.get('subject') === '' ? 'Without subject':formData.get('subject') }<br/>
    ${formData.get('description') === '' ? 'Without description':formData.get('description')}<br/>
    `;
    content.appendChild(paragraph);

    function ClosePopup() {
      modal.style.display = "none";
      content.removeChild(paragraph);
    }
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
      ClosePopup();
    }
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal) {
        ClosePopup();
      }
    }
  });


};
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
  // implement active class to selected portfolio buttons
  const groupBtns = document.querySelector(".group_buttons");
  const btns = groupBtns.getElementsByClassName("portfolio__group_buttons__button");
  for (var i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function() {
      const imageWrapper = document.querySelector('.portfolio__work_list');
      const images = imageWrapper.querySelectorAll('.portfolio__work_list_item');
      shuffle(images, imageWrapper);
      let current = document.getElementsByClassName("selected");
      current[0].className = current[0].className.replace(" selected", "");
      this.className += " selected";
    });
  }


  function shuffle(array, wrapper) {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.lastChild);
    }
    const newArr = Array.from(array).sort(() => Math.random() - 0.5).map((el, i) => {
      el.classList.remove("first");
      el.classList.remove("last");
      if (i === 0 || i === 4 || i === 8 ) {
        el.className += " first"
      }
      if (i === 3 || i === 7 || i === 11 ) {
        el.className += " last"
      }
      return el;
    });

    newArr.map(e => {
      wrapper.appendChild(e);
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
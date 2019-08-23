let devModal = document.getElementById("devModal");
let uniqModal = document.getElementById("uniqueModal");
let respModal = document.getElementById("responsiveModal");
let sModal = document.getElementById("seoModal");

let precise = document.getElementById("preciseText");
let unique = document.getElementById("uniqueText");
let responsive = document.getElementById("responsiveText");
let seo = document.getElementById("seoText");

function developmentModal() {
  devModal.style.display = "block";
  let text = `
       <h3>This is precise development text</h3>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>       
    `;
  precise.innerHTML = text;
}
function devClose() {
  devModal.style.display = "none";
}

function uniqueModal() {
  uniqModal.style.display = "block";
  let text = `
  <h3>This is unique design text</h3>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Et placeat voluptas asperiores quibusdam iure accusantium 
     saepe fuga dignissimos illo iste mollitia corporis harum 
     ullam laborum rerum error, vero, ducimus soluta.
  </p>
  <br>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Et placeat voluptas asperiores quibusdam iure accusantium 
     saepe fuga dignissimos illo iste mollitia corporis harum 
     ullam laborum rerum error, vero, ducimus soluta.
  </p>       
`;
  unique.innerHTML = text;
}
function uniqueClose() {
  uniqModal.style.display = "none";
}

function responsiveModal() {
  respModal.style.display = "block";
  let text = `
       <h3>This is responsive layout text</h3>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>       
    `;
  responsive.innerHTML = text;
}
function respClose() {
  respModal.style.display = "none";
}

function seoModal() {
  sModal.style.display = "block";
  let text = `
       <h3>This is seo friendly text</h3>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>
       <br>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Et placeat voluptas asperiores quibusdam iure accusantium 
          saepe fuga dignissimos illo iste mollitia corporis harum 
          ullam laborum rerum error, vero, ducimus soluta.
       </p>       
    `;
  seo.innerHTML = text;
}
function seoClose() {
  sModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == devModal) {
    devModal.style.display = "none";
  } else if (event.target == uniqModal) {
    uniqModal.style.display = "none";
  } else if (event.target == respModal) {
    respModal.style.display = "none";
  } else if (event.target == sModal) {
    sModal.style.display = "none";
  }
};

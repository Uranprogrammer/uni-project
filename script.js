const backToTopButton = document.querySelector("#btnScrollToTop");

      window.addEventListener("scroll", scrollFunction);

      function scrollFunction() {
         if(window.pageYOffset > 100) {
            if(!backToTopButton.classList.contains("btnEntrance")){
               backToTopButton.classList.remove("btnExit")
               backToTopButton.classList.add("btnEntrance");
               backToTopButton.style.display = "block";
            }
         }
         else{
            if(backToTopButton.classList.contains("btnEntrance")){
               backToTopButton.classList.remove("btnEntrance");
               backToTopButton.classList.add("btnExit");
               setTimeout(function() {
                  backToTopButton.style.display = "none"; 
               }, 250);
            }
         }
      }

      backToTopButton.addEventListener("click", backToTop);

      function backToTop(){
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
                     
         });
      }


   const nameInput = document.querySelector('#name');
	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

   const close = document.querySelector('.close');
   const show = document.querySelector('.login');
   const form = document.querySelector('.form');

   show.addEventListener('click', function(){
      form.classList.add('show');
   })

   close.addEventListener('click', function(){
      form.classList.remove('show');
   })
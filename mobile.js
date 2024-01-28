(() => {
    const refs = {
      openMobileBtn: document.querySelector("[mobile-open]"),
      closeMobileBtn: document.querySelector("[mobile-close]"),
      mobile: document.querySelector("[mobile]"),
    };
  
    refs.openMobileBtn.addEventListener("click", toggleMobile);
    refs.closeMobileBtn.addEventListener("click", toggleMobile);
  
    function toggleMobile() {
      refs.mobile.classList.toggle("is-hidden");
    }
  })();
(() => {
    const refs = {
      openModalBtn: document.querySelector("[mobile-test-open]"),
      closeModalBtn: document.querySelector("[mobile-test-close]"),
      modal: document.querySelector("[mobile-test]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
const envelope = document.querySelector('.envelope-wrapper');

        envelope.addEventListener('click', () => {
            envelope.classList.add('flap');
            document.getElementById('button').style.display = 'block';
        });
        
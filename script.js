onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
const envelope = document.querySelector('.envelope-wrapper');

        envelope.addEventListener('click', () => {
            envelope.classList.add('flap');
            setTimeout(() => {
             document.getElementById('button').style.display = 'block';
        }, 2000)
           
        });
        
        const buttons = document.getElementById('button')
        
        buttons.addEventListener('click', () => {
        document.getElementById('flowers').style.display = 'block'; 
        document.querySelector('.envelope-wrapper').style.display='none';
        buttons.style.display= 'none'
        });
        
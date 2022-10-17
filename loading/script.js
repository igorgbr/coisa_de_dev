function findCats() {
    return fetch(`https://api.thecatapi.com/v1/images/search`);
  }
  
  const submitButton = document.querySelector('#submit_form');
  
  submitButton.addEventListener('submit', (e) => {
    e.preventDefault();
    doSubmit();
  });
  
  async function doSubmit() {
    const catbox = document.querySelector('#catbox');
  
    catbox.innerHTML =
      '<div class="classic-1" role="status"><span class="sr-only"></span></div>';
  
    setTimeout(async () => {
      const catResponse = await findCats();
      const data = await catResponse.json();
      catbox.innerHTML = `<div class="mt-4"><img src="${data[0].url}" style="width: 374px; border-radius: 50%;" /> </div>`;
    }, 3000);
  }
  
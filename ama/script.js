const user = {
    fist_name: "Mario",
    last_name: "Gomez",
    username: "paoaya",
    language_code: "id",
    photo_url: "https://st.depositphotos.com/11953928/60630/v/1600/depositphotos_606307488-stock-illustration-anime-boy-avatar-stars-background.jpg",
}

let startParam = "pororo";


document.getElementById('send').addEventListener('click', async function() {
    let button = this;
    
    // Tambahkan efek loading
    button.classList.add('loading');
    console.log("dikirim")
    // Simulasi proses async (misalnya, mengirim data)
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Hapus efek loading setelah selesai
    button.classList.remove('loading');
    document.getElementById('question').value = ''
});


function ubahRouteHash(fitur, state = null, title = '') {
  const newHash = `#${fitur}`;
  const newUrl = window.location.pathname + window.location.search + newHash;
  window.history.pushState(state, title, newUrl); // Menggunakan pushState
  console.log(`Berpindah ke: ${newUrl}`, state);
}

function disableTransitions(element) {
    element.style.transition = 'none';
}

function showRegistrationForm() {
    
}

const continueBtn = document.getElementById('continue');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');

continueBtn.addEventListener('click', () => {
    form1.classList.remove('active');
    form2.classList.add('active');
    setTimeout(() => {
        disableTransitions(form2);
        }, 1000);
});

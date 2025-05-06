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
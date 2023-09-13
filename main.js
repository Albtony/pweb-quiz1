window.submitf = () => {
    const getValue = function(id) {
        const elem = document.getElementById(id);
        if(elem.value) return elem.value
        else return null;
    };

    const peserta = {
        nama: getValue("nama"),
        instansi: getValue("instansi"),
        alamat: getValue("alamat"),
        kodePos: getValue("kodepos"),
        noTelp: getValue("noTelp"),
        email: getValue("email"),
        sponsor: getValue("sponsor")
    }

    const perusahaan = {
        nama: getValue("namaP"),
        alamat: getValue("alamatP"),
        kontak: getValue("kontakP"),
        noTelp: getValue("noTelpP"),
        email: getValue("emailP")
    }

    if(isInputBlank(peserta) || isInputBlank(perusahaan)) 
        return;

    if(!isPhoneNumber(peserta.noTelp) || !isPhoneNumber(perusahaan.noTelp))
        return;

    createTemporaryPopup('Form Submitted!', '#2E8B57', 2);
}

window.isPhoneNumber = (number) => {
    if(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(number)) 
        return true;
    createTemporaryPopup(`Please recheck your phone number`, '#ff3e3e', 2);
    return false;
}

window.isInputBlank = (object) => {
    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
        if(value == null) {
            createTemporaryPopup(`Please fill out the blanks`, '#ff3e3e', 2);
            return true;
        }
    }
    return false;
}

window.createTemporaryPopup = async (message, color, duration) => {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.backgroundColor = color;
    popup.innerHTML = message;

    document.body.appendChild(popup);
    await waitFor(duration * 1000);
    popup.style.opacity = 0;
    await waitFor(3 * 100);
    popup.remove();
}

window.waitFor = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
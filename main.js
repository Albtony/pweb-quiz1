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

    alert('Form Submitted!');
}

window.isPhoneNumber = (number) => {
    if(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(number)) 
        return true;
    alert(`Please recheck your phone number`);
    return false;
}

window.isInputBlank = (object) => {
    for (const [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
        if(value == null) {
            alert(`Please fill out the blanks`)
            return true;
        }
    }
    return false;
}
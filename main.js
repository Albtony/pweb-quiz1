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
    if(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(number)) {
        alert(`Please recheck your phone number`);
        return true;
    }
    return false;
}

window.isInputBlank = (object) => {
    for (const field in object) {
        if(object.field == null) {
            alert(`Please fill out the blank`);
            return true;
        } 
        return false;
    }
}
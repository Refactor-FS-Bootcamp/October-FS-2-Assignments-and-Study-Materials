document.getElementById('kgsInput').addEventListener('input', e => {
    let kgs = e.target.value;
    document.getElementById('lbsOutput').innerText = kgs * 2.205;
})
const downloadBtn = document.querySelector('[data-download-btn]');

downloadBtn.addEventListener('click', e =>{
    const screenShotTarget = document.querySelector('[data-schedule]');

    html2canvas(screenShotTarget).then((canvas) =>{
        const base64image = canvas.toDataURL('image/png');
        let anchor = document.createElement('a');
        anchor.setAttribute('href', base64image);
        anchor.setAttribute('download', 'my-schedule.png');
        anchor.click();
        anchor.remove();
    });
})







   
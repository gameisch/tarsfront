$(document).ready(function () {
    $('.form__file-input input').change(function (e) {
        const files = e.target.files,
            text = $(this).parents('.form__file-input').find('span');
        let textFiles = '';
        for (let i = 0; i < files.length; i++) {
            textFiles += files[i].name;
            if (i !== files.length - 1) {
                textFiles += ', ';
            } else {
                textFiles += '.';
            }
        }
        if (textFiles !== '') {
            text.text('File uploaded: ' + textFiles);
        } else {
            text.text('ATTACH RESUME');
        }
    });
});

function validator (text, min, max){
        return new Promise(function(resolve, reject) {
            if (text.length >= min && text.length <= max) {
                resolve('OK');
            } else {
                reject('Text too long');
            }
        });
    }

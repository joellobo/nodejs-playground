
const option = {
    type: null,
    validate: false
};

const load = function load(file) {
    if (option.validate) {
        validate(option.type);
    }

    // load file
    data = 'kjfsanjdsaNBDJSABDAJHSdbSAHDBSAHdbvaSHDVBSAhdvsa';

    return data;
}

const validate = function validate() {
    return true;
}

//export default jwt;
module.export = {
    option,
    load,
    validate
};


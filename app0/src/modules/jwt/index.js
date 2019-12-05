
const option = {
    type: null,
    validate: false
};

const load = function load(file, option) {
    console.log(`option.type:${option.type}`);
    let data = null;    
    if (option.validate) {
        validate(option.type);
    }

    // load file
    data = 'kjfsanjdsaNBDJSABDAJHSdbSAHDBSAHdbvaSHDVBSAhdvsa';

    return data;
}

const validate = function validate(type) {
    console.log(`type:${type}`);
    return true;
}

export default {
        option,
        load,
        validate
    };

// module.export = {
//     option,
//     load,
//     validate
// };


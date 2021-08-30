/**
 * Function which validates given value is a valid email or not.
 *
 * @param val Value provided for email.
 * @returns {boolean}: True if value is valid email else false.
 */
const isEmail = (val) => {
    // Regex to verify email, It checks for special characters that are not allowed before @, are not present (like <,
    // >, [, ] etc), Then it validates text after @ should be either like an ip host i.e (belong to pattern
    // NNN.NNN.NNN.NNN where N is an number) or it could be something like XXXXX.XXX where X is alphanumeric and no. of
    // X can be any number greater than 2.
    // eslint-disable-next-line no-useless-escape, max-len
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
};
const validPhone = (val) => {
    //Matches indian phone number without +91 or 0
    const re = /^[6789]\d{9}$/;
    return re.test(String(val));
};

const validName = (val) => {
    const re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
    return re.test(String(val));
};

export { validPhone, validName, isEmail };

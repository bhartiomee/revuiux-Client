const PASSWORD_VALID_SYMBOLS = '!@#$%^&*()_+=';
const commonConstants = {
    QUESTIONNAIRE_TYPES: {
        quiz: 1,
        assessments: 2,
        survey: 3,
    },
    QUESTIONNAIRE_TYPES_NAME: {
        1: 'Quiz',
        2: 'Assessments',
        3: 'Survey',
    },
    QUESTIONNAIRE_STATUS: {
        draft: { id: 10, name: 'Draft' },
        published: { id: 20, name: 'Published' },
        archived: { id: 30, name: 'Archived' },
    },
    challengeSectionToRedirect: 3,
    defaultDateFormat: 'MM/DD/YYYY',
    DateTimeFormat: 'MM/DD/YYYY HH:mm',
    FILE_CONTENT_TYPE: [
        'application/zip',
        'text/csv',
    ],
    MAX_SEARCH_LENGTH: 250,
    PASSWORD_CHANGE_LOGOUT_TIMER: 5000,
    FLOAT_PRECISION: 2,
    FLOAT_REGEX: precision => {
        if (precision === 0) {
            return /^[+-]?(\s*(?=.*[0-9])\d*\s*)?$/;
        }
        return new RegExp(`^[+-]?(\\s*(?=.*[0-9])\\d*(?:\\.\\d{0,${precision}})?\\s*)?$`);
    },
    PASSWORD_VALID_SYMBOLS,
    PASSWORD_REGEX: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[${PASSWORD_VALID_SYMBOLS}]).{8,30}$`,
    // Creterias for Password Verifier
    validations: [
        {
            id: 'minlength',
            text: 'minimum 8 and maximum 30 characters',
            exp: /^.{8,30}$/,
        },
        {
            id: 'uppercase',
            text: 'at least one upper case letter',
            exp: /[A-Z]/,
        },
        {
            id: 'lowercase',
            text: 'at least one lower case letter',
            exp: /[a-z]/,
        },
        {
            id: 'number',
            text: 'at least one number',
            exp: /\d/,
        },
        {
            id: 'special',
            text: 'at least one special character: !@#$%^&*()_+=',
            exp: /[!@#$%^&*()_+=]/,
        },
    ],
    FIELD_OPERATORS: {
        equals: 'is equal to',
        not_equals: 'not equal to',
        in_op: 'includes',
        not_in: 'excludes',
        is_present: 'is present',
        greater_than: 'is greater than',
        greater_than_equals: 'is greater than or equal to',
        less_than: 'is less than',
        less_than_equals: 'is less than or equal to',
        between: 'between',
        starts_with: 'starts with',
        ends_with: 'ends with',
        has_substring: 'has substring',
        verifies_regex: 'verifies regex',
    },
};

export default commonConstants;

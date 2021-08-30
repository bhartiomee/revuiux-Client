const SignUpInputs = [
    {
        key: "name",
        type: "text",
        required: "true",
        className: "NameInput",
        name: "Name*:",
        id: 0,
        value: ""
    },

    {
        key: "email",
        type: "email",
        required: "true",
        className: "EmailInput",
        name: "Email*:",
        id: 1,
        value: ""
    },

    {
        key: "password",
        type: "password",
        required: "true",
        className: "PasswordInput",
        name: "Password*:",
        id: 2,
        value: ""
    },
    {
        key: "confirmPassword",
        type: "password",
        required: "true",
        className: "CnfPassInput",
        name: "Confirm Password*:",
        id: 3,
        value: ""
    },
    {
        key: "mobNo",
        type: "tel",
        required: "false",
        className: "MobNoInput",
        name: "Mobile No.:",
        id: 4,
        value: ""

    },
    {
        key: "location",
        type: "text",
        required: "false",
        className: "LocationInput",
        name: "Location:",
        id: 5,
        value: ""

    },
    {
        key: "focusArea",
        type: "text",
        required: "true",
        className: "FocusAreaInput",
        name: "Focus Area for Research (Descriptive)*:",
        id: 6,
        value: ""
    },
]
export default SignUpInputs;

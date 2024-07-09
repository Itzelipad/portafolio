export const customErrors = {
    maxLength: (value, maxSize) => value.length > parseInt(maxSize)
};

export const tiposDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customErrors"
];

export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre más largo.",
        customErrors: "Ha excedido el número de caracteres permitidos."
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail más largo."
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
        patternMismatch: "El campo asunto no cumple con el formato requerido.",
        tooShort: "El campo asunto debe tener al menos {minLength} caracteres.",
        customErrors: "Ha excedido el número máximo de caracteres permitidos."
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío.",
        patternMismatch: "El campo mensaje no cumple con el formato requerido.",
        tooShort: "El campo mensaje debe tener al menos {minLength} caracteres.",
        customErrors: "Ha excedido el número máximo de caracteres permitidos."
    }
};


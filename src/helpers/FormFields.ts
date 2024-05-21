type FormField = Record<string, {
    label: string,
    type: string,
    value: string | boolean | number | string[] | number[],
    options?: OptionType[],
}>;

export interface OptionType {
    label: string,
    value: string
}

export const loginForm: FormField = {
    credential: {
        value: "",
        label: "Login",
        type: "string",
    },
    password: {
        value: "",
        label: "Senha",
        type: "password",
    }
}

export const resetPasswordForm: FormField = {
    password: {
        value: "",
        label: "Senha",
        type: "password"
    },
    password_confirmation: {
        value: "",
        label: "Confirme sua senha",
        type: "password"
    }
}

export const rescheduleInspectionForm: FormField = {
    reason: {
        value: "",
        label: "Motivo",
        type: "select",
        options: [
            {label: "Problemas Pessoais", value: "personal_problems"},
            {label: "Cliente Solicitou", value: "client_requested"},
            {label: "Outro", value: "Outro"},
        ]
    },
    observations: {
        value: "",
        label: "Observações",
        type: "text"
    }
}
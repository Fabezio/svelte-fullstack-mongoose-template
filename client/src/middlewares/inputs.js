const inputs = [
        {
            type: "text",
            label: "nom",
            err: $errors.nom,
            form: $form.nom,
            placeholder: "Nom de famille: ",
        },
        {
            type: "text",
            label: "prenom",
            err: $errors.prenom,
            form: $form.prenom,
            placeholder: "Prénom: ",
        },
        {
            type: "email",
            label: "email",
            err: $errors.email,
            form: $form.email,
            placeholder: "Adresse de contact: ",
        },
        {
            type: "tel",
            label: "phone",
            err: $errors.phone,
            form: $form.phone,
            placeholder: "Numéro de télephone: ",
        },
    ];
    export default inputs
import * as yup from "yup";

const Registration = yup.object().shape({
    nomEntreprise: yup.string().required("Nom de l'entreprise est requis"),
    siret:yup.number().required('SIRET requis').max(14),
    adresse: yup.string().required("Adresse est requis"),
    codePostal: yup.number().max(5).required("Code postal requis"),
    ville: yup.string().required("Ville est requise"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords Don't Match")
        .required(),
});
export default Registration
import { z } from "zod"; 

export const formContactSchema = z.object({

    name: z
        .string({ required_error: "Ingresa tu nombre" })
        .min(3, { message: "Debe contener mínimo 3 caracteres" })
        .max(40, { message: "Debe contener máximo 40 caracteres" }),

    email: z
        .string({ required_error: "Ingresa tu email" })
        .email({ message: "El correo no es válido" }),

    subject: z
        .string({ required_error: "Selecciona un asunto" })
        .min(3, { message: "Debe contener mínimo 3 caracteres" })
        .max(40, { message: "Debe contener máximo 40 caracteres" }),
    
    
    phone: z
        .string({ required_error: "Ingresa tu número de teléfono" })
        .regex(/^[0-9]{7,15}$/, {
        message: "El teléfono debe contener solo números y tener entre 7 y 15 dígitos",
    }),

  message: z
    .string({ required_error: "Deja tu mensaje por favor" })
    .min(10, { message: "Debe contener al menos 10 caracteres" })
    .max(500, { message: "Debe contener máximo 500 caracteres" }),

});

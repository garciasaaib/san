'use server'

import nodemailer from 'nodemailer';
// const receivedEmail = 'garciasaaib@gmail.com'
const receivedEmail = 'aleocampe@hotmail.com'
export const sendFormData = async (data: FormData) => {
	const {SMTP_PASSWORD,SMTP_EMAIL} = process.env
	// Configura el transporte de Nodemailer usando SMTP con tus credenciales
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD,
		},
	});

	const email = data.get('email')
	const name = data.get('name')
	const description = data.get('description')


	try {
		await transporter.sendMail({
				from: SMTP_EMAIL, // dirección del remitente
				to: receivedEmail, // lista de destinatarios
				subject: "Form enviado desde la pagina", // Línea de asunto
				html: `<div>
				<b>Alerta de formulario de sitio web</b>
				<p>Alguien ha enviado sus datos desde el sitio web</p>
				<p>Estos son los datos de contacto</p>
				<p>${JSON.stringify({email, name, description}, null, 2)}</p>
				</div>
				`, // cuerpo del HTML
		})
		return true
	} catch (error) {
		return false
	}
}
'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormState } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendFormData } from "../actions/send-email-action"
import { useState } from "react"
const formSchema = z.object({
  name: z.string().min(2, 'Debe tener por lo menos 2 caracteres').max(100),
  email: z.string().min(10, 'Debe tener por lo menos 10 caracteres').max(50),
  description: z.string().min(20, 'Debe tener por lo menos 20 caracteres').max(500),
})

export const ContactForm = () => {
	const {toast} = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      description: "",
    },
  })

	const { isSubmitting } = useFormState({ control: form.control })
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
		const formData = new FormData()
    formData.append('email', values.email)
		formData.append('name', values.name)
		formData.append('description', values.description)
    const result = await sendFormData(formData)

    form.reset()

    if (result) {
			setIsSubmitted(true)
      toast({
        variant: "default",
        title: "Envio exitoso",
        description: "Se envio su correo de contacto correctamente",
      })
    } else {
			toast({
        variant: "destructive",
        title: "Envio fallido",
        description: "El envio falló, intente de nuevo mas tarde",
      })
		}
  }
	
  return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre de la empresa*</FormLabel>
							<FormControl>
								<Input
									required
									placeholder="Ingrese el nombre de la empresa"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo electronico</FormLabel>
							<FormControl>
								<Input
									required
									placeholder="Ingrese su direccion de correo*"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descripcion del negocio*</FormLabel>
							<FormControl>
								<Textarea
									required
									placeholder="Ingrese la descripcion del negocio"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit" disabled={isSubmitting || isSubmitted}>
					Enviar formulario de contacto
				</Button>
			</form>
		</Form>
	);
}

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
import { sendFormData } from "../actions/send-email-action"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
const formSchema = z.object({
  email: z.string().email('Debe ser un email'),
})
export const FooterForm = () => {
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // bloquear el doble click en submit
  const { isSubmitting } = useFormState({ control: form.control })

  // bloquear el boton si la primer enviada fue exitosa
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData()
    formData.append('email', values.email)
    const result = await sendFormData(formData)

    form.reset()

    if (result) {
      setIsSubmitted(true);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proyectos</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su direccion de correo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting || isSubmitted} className="w-full" type="submit">Enviar informacion de contacto</Button>
      </form>
    </Form>
  )
}
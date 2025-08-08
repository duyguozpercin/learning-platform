"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(1, { message: 'Companion is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  topic: z.string().min(1, { message: 'Topic is required' }),
  voice: z.string().min(1, { message: 'Voice is required' }),
  style: z.string().min(1, { message: 'Style is required' }),
  duration: z.number().min(1, { message: 'Duration is required' }),
});


const CompanionForm = () => {
// 1. Define your form.
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    subject: "",
    topic: "",
    voice: "",
    style: "",
    duration: 15,
  },
})

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}

  return (
    <div>
      
    </div>
  )
}

export default CompanionForm

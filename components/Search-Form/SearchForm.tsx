"use client"

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  city: string,
  type: string,
};


export default function SearchForm() {
  const {register, handleSubmit, formState} = useForm({
    defaultValues: {
      city: "München",
      type: "Wohnung",
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data)
  }

  return (

    <form className=" max-w-[720px] mx-auto " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-4 ">
        <div className="flex flex-col md:flex-row  justify-between gap-4 space-y-4 md:space-y-0">
        <select {...register("city")} className="border rounded-lg p-2 cursor-pointer basis-1/2">
          <option value="München">München</option>
          <option value="Gera">Gera</option>
          <option value="Berlin">Berlin</option>
        </select>

        <select {...register("type")} className="border rounded-lg  p-2 cursor-pointer basis-1/2">
          <option value="Wohnung">Wohnung</option>
          <option value="WG-Zimmer">WG-Zimmer</option>
        </select>
        </div>

        <button type="submit" className=" rounded-lg mt-10 bg-green-700 text-white cursor-pointer py-2 hover:bg-green-900 transition-all"> Suche </button>
      </div>

    </form>
  )
}

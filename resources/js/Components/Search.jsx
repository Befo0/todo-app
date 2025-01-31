import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "./InputError";

export default function Search() {
    const {data, setData, get, errors} = useForm({
        state_id: 0
    })

    const [filter, setFilter] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        get(route('todos.list'), {
            onSuccess: () => {
                setFilter(false);
            }
        })
    }

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                <div className="p-4 sm:p-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                    {
                        filter ?
                            <form onSubmit={handleSubmit} action="" className="flex flex-col sm:flex-col sm:justify-center sm:items-center gap-y-6 ">
                                <div className="flex flex-col items-center gap-y-2">
                                    <select name="" id="" className="form-style" onChange={(e) => setData('state_id', e.target.value)}>
                                        <option value="0" disabled selected>Seleccionar</option>
                                        <option value="1">Pendientes</option>
                                        <option value="2">Finalizados</option>
                                        <option value="3">Mostrar todos</option>
                                    </select>
                                    <InputError message={errors.state_id} className="mt-2"/>
                                </div>
                                <div className="flex gap-x-4 justify-center">
                                    <PrimaryButton type="submit" > Filtrar </PrimaryButton>
                                    <SecondaryButton type="button" onClick={() => setFilter(false)} > Cancelar </SecondaryButton>
                                </div>
                            </form>
                            :
                            <div className="flex flex-col items-center gap-y-4">
                                <label htmlFor="">Filtrar To Do's</label>
                                <PrimaryButton type="button" onClick={() => setFilter(true)}> Filtrar </PrimaryButton>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
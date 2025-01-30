import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';
import { Toaster, toast } from "sonner";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        todo: '',
        date: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('todos.store'), { 
            onSuccess: () => {
                reset()
                toast.success('To Do insertado correctamente')
            },
            onError: () => {
                toast.error('Error al insertar To Do')
            }
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create To Do
                </h2>
            }
        >
            <Head title="Create To Do" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <Toaster richColors position="top-right" />
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" className="form-style" placeholder="Titulo del que hacer" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                        <InputError message={errors.title} className="mt-2"/>
                    </div>
                    <textarea name="" id="" className="block w-full form-style h-32 resize-none" placeholder="Notas..." value={data.todo} onChange={(e) => setData('todo', e.target.value)}></textarea>
                    <InputError message={errors.todo} className="mt-2" />
                    <p className="mt-4">Fecha recordatorio:</p>
                    <div className="mt-4">
                        <input type="datetime-local" name="" id="date" className="form-style " value={data.date} onChange={(e) => setData('date', e.target.value)} />
                    </div>
                    <InputError message={errors.date} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Agregar que hacer</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}
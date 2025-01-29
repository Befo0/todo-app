import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        todo: '',
        date: '',
        time: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('todos.store'), { onSuccess: () => reset()});
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    To Do
                </h2>
            }
        >
            <Head title="List of ToDo's" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" className="broder-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Titulo del que hacer" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                    </div>
                    <textarea name="" id="" className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm h-32" placeholder="Notas..." value={data.todo} onChange={(e) => setData('todo', e.target.value)}></textarea>
                    <div className="mt-4 flex justify-evenly items-center">
                        <div className="flex gap-4 items-center">
                            <label htmlFor="date">Fecha</label>
                            <input type="date" name="" id="date" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " value={data.date} onChange={(e) => setData('date', e.target.value)}/>
                        </div>
                        <div className="flex gap-4 items-center">
                            <label htmlFor="time">Hora</label>
                            <input type="time" name="" id="time" className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " value={data.time} onChange={(e) => setData('time', e.target.value)}/>
                        </div>
                    </div>
                    <InputError message={errors.message} />
                    <PrimaryButton className="mt-4" disabled={processing}>Agregar que hacer</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}
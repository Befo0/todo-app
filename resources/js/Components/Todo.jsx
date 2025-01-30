import { EditIcon } from '@/Components/Icons.jsx'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import DangerButton from './DangerButton'
import InputError from './InputError'

dayjs.extend(relativeTime)

export default function Todo({ todo }) {


    const { data, setData, patch, processing, clearErrors, errors, reset } = useForm({
        title: todo.title,
        todo: todo.todo,
        date: todo.date,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        patch(route('todos.update', todo.id))
    }

    const [editing, setEditing] = useState(false)

    return (
        <div className="p-6 flex space-x-2 w-full">
            <div className="flex-1">
                <div className="flex justify-between">
                    {
                        editing
                            ?
                            <form action="" onSubmit={handleSubmit} className='w-full'>
                                <div className='flex flex-col'>
                                    <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className='mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm' />
                                    <InputError message={errors.title} className='mt-2' />
                                    <textarea name="" id="" value={data.todo} onChange={(e) => setData('todo', e.target.value)} className='mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm h-32 resize-none'></textarea>
                                    <InputError message={errors.todo} className='mt-2' />
                                </div>
                                <label htmlFor="date">Cambiar fecha de recordatorio</label>
                                <input type="datetime-local" id='date' value={data.date} onChange={(e) => setData('date', e.target.value)} className='mb-4 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ml-6' />
                                <InputError message={errors.date} className='mt-2' />
                                <label htmlFor="isFinished" className='ml-10'>Marcar como finalizado</label>
                                <input type="checkbox" id='isFinished' className='ml-4 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'/>
                                <div className='flex justify-between'>
                                    <div className='flex gap-x-4'>
                                        <PrimaryButton type='submit'>Editar</PrimaryButton>
                                        <SecondaryButton onClick={() => { setEditing(false); reset(); clearErrors() }}>Cancelar</SecondaryButton>
                                    </div>
                                    <div>
                                        <DangerButton>Eliminar</DangerButton>
                                    </div>
                                </div>
                            </form>
                            :
                            <div className='max-w-[750px]'>
                                <span className="text-gray-800">{todo.title}</span>
                                <p className="mt-4 text-lg text-gray-900 text-start">{todo.todo}</p>
                            </div>
                    }
                    <div className='flex flex-col justify-between items-end w-40 max-w-40'>
                        <button className='hover:bg-slate-50 rounded-lg' onClick={() => setEditing(true)}>
                            <EditIcon />
                        </button>
                        <div>
                            <small className="text-sm text-gray-600">{dayjs(todo.created_at).fromNow()}</small>
                            {todo.created_at !== todo.updated_at && <small className='text-sm text-gray-600'> &middot; edited</small>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
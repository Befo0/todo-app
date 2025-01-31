import { EditIcon } from '@/Components/Icons.jsx'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import DangerButton from './DangerButton'
import InputError from './InputError'
import { Toaster, toast } from 'sonner'
import DeleteDialog from './DeleteDialog'

dayjs.extend(relativeTime)

export default function Todo({ todo }) {

    const { data, setData, patch, clearErrors, errors, reset } = useForm({
        title: todo.title,
        todo: todo.todo,
        date: todo.date,
        state_id: todo.state_id !== 1 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        patch(route('todos.update', todo.id), {
            onSuccess: () => {
                setEditing(false)
                toast.success('El To Do se ha editado correctamente')
            },
            onError: () => {
                toast.error('Ha ocurrido un error al editar')
            }
        })
    }

    const [editing, setEditing] = useState(false)

    return (
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <Toaster richColors position='top-right' />
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    {editing ? (
                        <form onSubmit={handleSubmit} className='w-full'>
                            <div className='flex flex-col'>
                                <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className='mb-2 form-style' />
                                <InputError message={errors.title} className='mt-2' />
                                <textarea value={data.todo} onChange={(e) => setData('todo', e.target.value)} className='mb-2 form-style h-32 resize-none'></textarea>
                                <InputError message={errors.todo} className='mt-2' />
                            </div>
                            <label htmlFor="date" className="block mt-2">Cambiar fecha de recordatorio</label>
                            <input type="datetime-local" id='date' value={data.date} onChange={(e) => setData('date', e.target.value)} className='mb-4 form-style' />
                            <InputError message={errors.date} className='mt-2' />
                            <div className='flex items-center gap-2 mt-2'>
                                <label htmlFor="isFinished">Marcar como finalizado</label>
                                <input type="checkbox" id='isFinished' className='form-style' onClick={() => setData('state_id', !data.state_id)} />
                            </div>
                            <div className='flex flex-col sm:flex-row sm:justify-between gap-4 mt-4'>
                                <div className='flex gap-x-4'>
                                    <PrimaryButton type='submit'>Editar</PrimaryButton>
                                    <SecondaryButton onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancelar</SecondaryButton>
                                </div>
                                <DeleteDialog todo={todo.id} />
                            </div>
                        </form>
                    ) : (
                        <div className='max-w-full sm:max-w-[750px]'>
                            <span className="text-gray-800 text-lg font-semibold break-words">{todo.title}</span>
                            <p className="mt-2 text-gray-900 text-start break-words">{todo.todo}</p>
                        </div>
                    )}
                    <div className='flex ml-2 sm:flex-col justify-between items-end sm:items-start w-full sm:w-40 sm:max-w-40 mt-4 sm:mt-0'>
                        <button className='hover:bg-slate-50 rounded-lg p-1' onClick={() => setEditing(true)}>
                            <EditIcon />
                        </button>
                        <div className='text-sm text-gray-600 text-right sm:text-left'>
                            <small>{dayjs(todo.created_at).fromNow()}</small>
                            {todo.created_at !== todo.updated_at && <small> &middot; edited</small>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
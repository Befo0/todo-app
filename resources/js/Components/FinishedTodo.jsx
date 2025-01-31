import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function FinishedTodo({ todo }) {
    return (
        <div className="bg-lime-50 p-4 sm:p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full first:rounded-t-lg">
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className='max-w-full sm:max-w-[750px]'>
                        <span className="text-gray-800 text-lg font-semibold break-words">{todo.title}</span>
                        <p className="mt-2 text-gray-900 text-start break-words">{todo.todo}</p>
                    </div>
                    <div className='flex ml-2 sm:flex-col justify-center items-end sm:items-end w-full sm:w-40 sm:max-w-40 mt-6 sm:mt-0'>
                        <div className='text-sm text-gray-600 text-right sm:text-left'>
                            {todo.created_at !== todo.updated_at && <strong>Finished &middot;</strong>}
                            <strong> {dayjs(todo.created_at).fromNow()}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
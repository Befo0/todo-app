export default function Todo({ todo }){
    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{todo.title}</span>
                        <small className="ml-2 text-sm text-gray-600">{new Date(todo.created_at).toLocaleString()}</small>
                    </div>
                </div>
                <p className="mt-4 text-lg text-gray-900">{todo.todo}</p>
            </div>
        </div>
    )
}
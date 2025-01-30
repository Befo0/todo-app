import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import Todo from "@/Components/Todo";

export default function List({ todos }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    To Do's
                </h2>
            }
        >
            <Head title="To Do's" />
            {   
                todos.length > 0 ?
                <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                        {todos.map(todo =>
                            <Todo key={todo.id} todo={todo} />
                        )}
                    </div>
                </div>
                :
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                No hay que haceres!
                            </div>
                        </div>
                    </div>
                </div>

            }

        </AuthenticatedLayout >
    )
}
import { useState } from "react"
import DangerButton from "./DangerButton"
import { Link } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton"
import { DangerIcons } from "./Icons"

export default function DeleteDialog({ todo }) {


    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div>
                <DangerButton type="button" onClick={() => setIsOpen(true)}>
                    Eliminar
                </DangerButton>
            </div>
            {
                isOpen &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-[90%] md:w-[512px] h-[340px] max-w-lg flex flex-col justify-evenly items-center text-center animate-fade-in">
                        <div className="text-5xl text-orange-300"><DangerIcons /></div>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-3xl font-semibold mt-4 text-gray-800">Estas seguro de esta acción?</h2>
                            <p className="text-gray-600 mt-2 text-xl px-6">
                                Esto no se puede revertir
                            </p>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Link as="button" href={route('todos.delete', todo)} method="delete" className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 w-32 h-12 justify-center " >
                                Eliminar
                            </Link>
                            <PrimaryButton type="button" className="w-32 justify-center" onClick={() => setIsOpen(false)}>
                                Cancelar
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
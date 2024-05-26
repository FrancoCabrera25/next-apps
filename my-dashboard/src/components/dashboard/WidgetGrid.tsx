'use client';
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"

export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count);
    return (
        <div className='flex flex-wrap p-2 m-3 items-center justify-center'>
            <SimpleWidget
                title={`${count}`}
                subTtitle='Productos agregados'
                label='Contadoer'
                icon={<IoCartOutline size={70} className='text-blue-600' />}
                href="/dashboard/counter" 
            />

        </div>
    );
};

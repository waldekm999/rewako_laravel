import React from 'react';
import StuffLayout from '@/Layouts/StuffLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import NavLink from '@/Components/NavLink';
import { Head} from '@inertiajs/react';


export default function Index({ auth, stripes }) {
   
    return (
        <StuffLayout auth={auth}>            
            <Head title='Stripes' />   
            <div className="overflow-auto p-3 rounded-lg shadow hidden md:block">           
            <table className='table-auto w-full'>
                <thead className="bg-gray-500 text-white border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Nazwa</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Index</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Kolor</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Szer[cm]</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Gr [mm]</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Chłodniczy</th>                
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">j.m.</th> 
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Cena PLN</th> 
                        <th className="p-3 text-sm font-semibold tracking-wide text-centre">Edycja</th>     
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {stripes.map(stripe =>
                        <tr key={stripe.id} className="bg-white">
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-left' >{stripe.name}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.index}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.colour}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.width}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.thickness}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.isCool ? "tak" : "nie"}</th>
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>m.b.</th> 
                            <th className='p-3 text-sm text-gray-900 whitespace-nowrap text-centre'>{stripe.price}</th> 
                            <th className='p-3'>
                                <PrimaryButton className="bg-blue-500">
                                    <NavLink href ={route('stripes.edit', stripe.id)}>
                                        Edutuj
                                    </NavLink>
                                </PrimaryButton>
                            </th>                   
                        </tr>
                        )}     
                </tbody>
            </table>
            </div> 

    
   
        </StuffLayout>
    )
    
}
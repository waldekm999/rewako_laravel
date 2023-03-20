import React from 'react';
import StuffLayout from '@/Layouts/StuffLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';

export default function Index({ auth, stripes }) {
   
    return (
        <StuffLayout auth={auth}>
            <Head title='Stripes' />

        
       
    <table className='table-auto m-5 p-5'>
        <thead>
            <tr>
                <th>Nazwa</th>
                <th>Index</th>
                <th>Kolor</th>
                <th>Szer[cm]</th>
                <th>Gr [mm]</th>
                <th>Chłodniczy</th>                
                <th>j.m.</th> 
                <th>Cena PLN</th>     
            </tr>
        </thead>
        <tbody>
            {stripes.map(stripe =>
                <tr key={stripe.id}>
                    <th>{stripe.name}</th>
                    <th>{stripe.index}</th>
                    <th>{stripe.colour}</th>
                    <th>{stripe.width}</th>
                    <th>{stripe.thickness}</th>
                    <th>{stripe.isCool ? "tak" : "nie"}</th>
                    <th>m.b.</th> 
                    <th>{stripe.price}</th>                    
                </tr>
                )}     
        </tbody>
    </table>

    
   
        </StuffLayout>
    )
    
}
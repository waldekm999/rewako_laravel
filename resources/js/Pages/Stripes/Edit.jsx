import React from 'react';
import StuffLayout from '@/Layouts/StuffLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Edit({auth, stripe}) {

    console.log(stripe)
    return(
        <StuffLayout auth={auth}>
            <Head title='Stripe' />
            <h1>Szczegóły pasa</h1>            
        </StuffLayout>
    )
}
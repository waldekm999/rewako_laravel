import React from 'react';
import StuffLayout from '@/Layouts/StuffLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {


    return (
        <StuffLayout auth={auth}>
            <Head title='Stripes' />

        <h1 className='mx-auto p-4'>Tu bedzie lista pasów</h1>

        </StuffLayout>
    )
    
}
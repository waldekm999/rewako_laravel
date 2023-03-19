import React from 'react';
import StuffLayout from '@/Layouts/StuffLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        index: '',
        width: '',
        thickness: '',
        colour: '',  
        price: '',
        isCool: false,      
    });
 
    const submit = (e) => {   
        console.log(data.thickness);
        console.log(typeof(data.thickness));                   
        e.preventDefault();
        post(route('stripes.store'), { onSuccess: () => reset() });
    };
 
    return (
        <StuffLayout auth={auth}>
            <Head title="Stripes" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>                    
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fName'>Nazwa:</label>
                    <input type="text"
                        id='fName'  name='fName'
                        value={data.name}
                        placeholder="wpisz nazwę"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('name', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fName'>Index:</label>
                    <input type="text"
                        id='fIndex'  name='fIndex'
                        value={data.index}
                        placeholder="wpisz index"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('index', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fWidth'>Szerokość:</label>
                    <input type="text"
                        id='fWidth'  name='fWidth'
                        value={data.width}
                        placeholder="podaj szerokość w cm"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('width', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fThickness'>Grubość:</label>
                    <input type="text"
                        id='fTickness'  name='fTickness'
                        value={data.thickness}
                        placeholder="podaj grubość w mm"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('thickness', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fColour'>Kolor:</label>
                    <input type="text"
                        id='fColour' name='fColour'
                        value={data.colour}
                        placeholder="wpisz kolor"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('colour', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fPrice'>Cena:</label>
                    <input type="text"
                        id='fPrice'  name='fPrice'
                        value={data.price}
                        placeholder="podaj cenę za mb"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('price', e.target.value)}
                    ></input>
                    <label className="block text-gray-700  font-bold mb-2" htmlFor='fIsCool'>Pas chłodniczy:</label>
                    <input type="checkbox"
                        id='fIsCool' name='fIsCool'
                        value={true}                        
                        className="block border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('isCool', e.target.value)}
                    ></input>
                    
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Utwórz</PrimaryButton>
                </form>
            </div>
        </StuffLayout>
    );
}
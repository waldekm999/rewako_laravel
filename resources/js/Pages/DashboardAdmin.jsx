import StuffLayout from '@/Layouts/StuffLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {    

    

    return (
        <StuffLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">                        
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <h1 className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-8 text-green-900" >Below list of courtains users's asked</h1>
                    </div>
                </div>
            </div>
        </StuffLayout>
    );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const payments = [
    {
        title: "Payment 1",
        dateTime: "2022-09-01",
        receiptUrl: "https://example.com/receipts/payment1.pdf"
    },
    {
        title: "Payment 2",
        dateTime: "2022-08-15",
        receiptUrl: "https://example.com/receipts/payment2.pdf"
    },
    {
        title: "Payment 3",
        dateTime: "2022-07-30",
        receiptUrl: "https://example.com/receipts/payment3.pdf"
    }
];

const FeePayment = () => {
    // Add your component logic here

    return (
        <div className="container mx-auto">
            <div className='p-4 bg-white rounded-2xl'>
                <h1 className="text-lg font-bold mb-4">BTECHIT</h1>
                <p>Status: No Active Fee Payments for this session</p>
            </div>
            <div className='p-4 bg-white rounded-2xl mt-4'>
                <h1 className="text-lg font-bold mb-4">Payment History</h1>
                {payments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-md">{payment.title}</h2>
                            <p className="text-gray-500 text-xs">{payment.dateTime}</p>
                        </div>
                        <a href={payment.receiptUrl} download className="rounded text-indigo-800 p-2 hover:shadow-md px-4 text-sm bg-indigo-100 font-bold">Download Receipt</a>
                    </div>
                ))}
            </div>
            <div className='p-4 bg-white rounded-2xl mt-4 pb-6'>
                <h1 className="text-lg font-bold mb-4">Payment Instructions</h1>
                <NavLink to="/dashboard/fee-payment/instructions" className="rounded text-indigo-800 p-2 hover:shadow-md px-4 text-sm bg-indigo-100 font-bold">Click Here</NavLink>
            </div>
        </div>
    );
};

export default FeePayment;

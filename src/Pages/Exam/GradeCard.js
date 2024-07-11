
import React from 'react'

const GradeCard = () => {
    const gradeCardData = [
        {
            Programme: 'BTECHIT : Bachelor of Technology(INFORMATION AND TECHNOLOGY)',
            Term: 5,
            TermType: 'SEMESTER',
            YearOfExam: 2023,
            GradeCard: 'Link to Grade Card'
        }
    ];

    return (
        <div className="w-full p-4 bg-white rounded-xl text-sm">
            <h1 className='text-lg mb-4 font-bold'>Results</h1>
            <table className='w-full text-left'>
                <thead>
                    <tr>
                        <th className="px-4 border py-2">Programme</th>
                        <th className="px-4 border py-2">Term</th>
                        <th className="px-4 border py-2">Term Type</th>
                        <th className="px-4 border py-2">Year Of Exam</th>
                        <th className="px-4 border py-2">Grade Card</th>
                    </tr>
                </thead>
                <tbody>
                    {gradeCardData.map((data, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{data.Programme}</td>
                            <td className="border px-4 py-2">{data.Term}</td>
                            <td className="border px-4 py-2">{data.TermType}</td>
                            <td className="border px-4 py-2">{data.YearOfExam}</td>
                            <td className="border px-4 py-2">
                                <a href={data.GradeCard}>View Grade Card</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default GradeCard
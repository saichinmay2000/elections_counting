import { useEffect, useState } from "react";
import Header from "./components/header";

export default function ResultList(){

    const [data, setData] = useState(null);
    const list = ["Agarwala Dipak Kumar","Bajoria Rishi","Bhandari Varun Raj","Chaudhary Deepak","Chokhany Gaurav","Chopra Arvind","Chotrani Kishore","Jhunjhunwala Sanjay","Kabrra Viineet","Karwa Aditya","Khaitan Kanti Prasad","Mahansaria Vivek","Mandal Anindya","Mehrotra Prashant","Mehta Pradeep Lal","Mehta Ronak","Murarka Mallika","Punjabi Mahesh","Roy Milon","Sardar Shahin imam","Shah Kamal","Singhi Rahul","Todi Rahul","Tondon Kanan"]
    useEffect(() => {
        const apiUrl = '/api/getElecData?valid=true'; 
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setData(data['array']);
        })
        .catch((error) => {
            console.error('API request failed:', error);
        });
        }, []);
        const arr = []
        arr.push(data,list)
    return(
        <>
            <Header/>
            <div className="p-5 flex flex-wrap">
                <table className="divide-y divide-gray-500 border border-black">
                    <thead>
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name of the person</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-500">
                        {
                        arr[1]?.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap font-bold">{item}</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
                <table className="divide-y divide-gray-500 border border-black">
                    <thead>
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">No. of Votes</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-500">
                        {
                        arr[0]?.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-center font-bold">{item}</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
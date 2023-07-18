'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

async function getData () {
    // const [data, setData] = useState();
    let data = '';
    useEffect(() => {
        const ContentstackAppSDK = dynamic(() => import('@contentstack/app-sdk'));
        ContentstackAppSDK.init().then(async (appSDK) => {
            const cFO = appSDK.location.CustomField;
            const cFD = await cFO.field.getData();
            data = cFD;
        })
    })
    return data;
}

export default async function Page() {
    const data = await getData();
    return <p>hi{data}</p>
}
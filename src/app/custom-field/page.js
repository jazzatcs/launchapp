'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

async function getData () {
    // const [data, setData] = useState();
    let data = '';
    useEffect(async () => {
        const ContentstackAppSDK = (await import('@contentstack/app-sdk')).default;
        ContentstackAppSDK.init().then(async (appSDK) => {
            const cFO = await appSDK.location.CustomField;
            const cFD = await cFO.field.getData();
            data = cFD;
            console.log(appSDK)
        })
    })
    return data;
}

export default async function Page() {
    const data = await getData();
    return <p>hi{data}</p>
}
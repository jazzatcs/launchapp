"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

async function getData() {
    const [groups, setGroups] = useState([]);
    const [customField, setCustomField] = useState();
    const [config, setConfig] = useState();
    let data = "";
    useEffect(async () => {
        const ContentstackAppSDK = (await import("@contentstack/app-sdk"))
            .default;
        ContentstackAppSDK.init().then(async (appSDK) => {
            setConfig(await appSDK.getConfig());
            if (config && Object.keys(config).length === 0) {
                console.log(`No configuration available`);
            }
            const customFieldObject = await appSDK.location.CustomField;
            setCustomField(customFieldObject);
            var fieldData = await customFieldObject.field.getData();
            const fieldConfig = await customFieldObject.fieldConfig;
            if (!isEmpty(fieldData) && fieldData !== null) {
                if (fieldData.constructorGroups) {
                    setGroups(fieldData.constructorGroups);
                }
            }
        });
    });
    return data;
}

export default async function Page() {
    const data = await getData();
    return <p>hi{data}</p>;
}

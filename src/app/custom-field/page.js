"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

async function getData() {
    let data = "";
    useEffect(async () => {
        const ContentstackAppSDK = (await import("@contentstack/app-sdk"))
            .default;
        ContentstackAppSDK.init().then(async (appSDK) => {
            const cFO = await appSDK.location.CustomField;
            const cFD = await cFO.field.getData();
            data = appSDK;
            console.log(appSDK)
        });
    });
    return data;
}

export default async function Page() {
    const data = await getData();
    console.log(data.stack)
    return <p>Serving from Launch. </p>;
}

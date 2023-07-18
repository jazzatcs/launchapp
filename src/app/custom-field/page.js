import ContentstackAppSDK from "@contentstack/app-sdk"

async function getData () {
    ContentstackAppSDK.init().then(async (appSDK) => {
        return appSDK;
    })
}

export default async function Page() {
    const data = await getData();
    return <p>{data}</p>
}
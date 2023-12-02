import { headers} from "next/headers";

export async function GET(){
    const headerList = headers();
    const host = headerList.get('Host');

    return new Response(`You made the response from ${host}`,{
        status: 200,
        headers: {host},
    });
}
import {cookies} from "next/headers";

export async function GET(){
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    return new Response(`Your token is ${token.value}`, {
        status: 200,
        headers: {'Set-Cookie': `token=${token.value}-modified!`},
    });
}
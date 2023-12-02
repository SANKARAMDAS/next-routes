export async function GET(request, {params}){
    let { slug } = params;
    return new Response(`Hello from drs: ${slug}`);
}
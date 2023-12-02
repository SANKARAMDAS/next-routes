export async function POST(request){
    let body = await request.json();
    let name = body.name;
    let website = body.website;
    return new Response(`Hello from POST route ${name}. Website is: ${website}`);
}
export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const posts = await res.json();

    return Response.json({posts});
}

export async function POST(){
    //posting a blog post

    return Response.json({msg: 'Hello from Post /blogposts'});
}

export async function DELETE(){
    //posting a blog post

    return Response.json({msg: 'Hello from Delete /blogposts'});
}
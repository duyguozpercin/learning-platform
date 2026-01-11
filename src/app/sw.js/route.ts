export async function GET() {
  // Tarayıcıya boş bir yanıt dönüyoruz, Clerk artık buraya dokunmayacak
  return new Response(null, { status: 204 });
}

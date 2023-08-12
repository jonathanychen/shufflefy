export async function GET (request: Request) {
  console.log('Spotify callback received')
  console.log(new URLSearchParams(window.location.search))
  return new Response('Done!')
}

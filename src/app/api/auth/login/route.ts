import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import { NextResponse } from 'next/server'

export async function GET () {
  console.log('HELLO')
  const sdk = SpotifyApi.withUserAuthorization((process.env.CLIENT_ID as string), (process.env.REDIRECT_URI as string), ['user-read-private', 'user-read-email'])
  return NextResponse.json({ text: 'received!' })
}

// do we even need this endpoint? feels like i don't...

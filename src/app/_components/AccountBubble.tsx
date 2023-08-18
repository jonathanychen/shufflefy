import { type SpotifyApi } from '@spotify/web-api-ts-sdk'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

export function AccountBubble ({ sdk }: { sdk: SpotifyApi }) {
  const [results, setResults] = useState({})

  useEffect(() => {
    (async () => {
      const results = await sdk.currentUser.profile()
      setResults(() => results)
    })()
  }, [sdk])

  return (
    <Box>
      <Avatar/>
      <Typography></Typography>
    </Box>
  )
}

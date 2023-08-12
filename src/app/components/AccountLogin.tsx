'use client'

import { Avatar, Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { AccountBubble } from './AccountBubble'

export default function AccountLogin ({ accessToken }: { accessToken: string | null }) {
  /**
   * If not authenticated, return button with onClick leading to authentication function
   */
  return (
    <Button variant="contained" href="/api/auth/login">
      Sign in with Spotify
    </Button>
  )
}

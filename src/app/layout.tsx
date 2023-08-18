import './globals.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Typography from '@mui/material/Typography'
import ThemeRegistry from './_components/ThemeRegistry/ThemeRegistry'
import Box from '@mui/material/Box'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shufflefy',
  description: 'Helps you create some custom playlists, and some other things'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper', display: 'flex', flexDirection: 'row', width: '100%' }}>
              <ShuffleIcon sx={{ color: 'white', mr: 2, transform: 'translateY(-2px)' }}/>
              <Typography variant="h6" noWrap component="div" color="white">
                Shufflefy
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: '48px',
              p: 3
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}

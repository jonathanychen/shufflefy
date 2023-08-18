import { Box } from '@mui/system'
import AccountLogin from './_components/AccountLogin'

export default function Home () {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <AccountLogin accessToken={null}/>
      </Box>
    </Box>
  )
}

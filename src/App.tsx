import { DropDownMenu } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { ExitIcon, HomeIcon } from '@radix-ui/react-icons'

export function App() {
  return (
    <div>
      <Button>hello</Button>
      <DropDownMenu
        callback={() => {
          console.log('yo')
        }}
        content={[
          { email: 'ribragimov2003@gmail.com', icon: <HomeIcon />, id: 1, title: 'Ivan' },
          { icon: <HomeIcon />, id: 2, title: 'My profile' },
          { icon: <ExitIcon />, id: 3, title: 'Log out' },
        ]}
        variant={'profiledrop'}
      >
        <HomeIcon />
      </DropDownMenu>
    </div>
  )
}

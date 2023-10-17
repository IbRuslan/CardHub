import { Avatar, DropDownItem, DropDownMenu } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { ExitIcon, HomeIcon } from '@radix-ui/react-icons'

export function App() {
  return (
    <div>
      <Button>hello</Button>
      <DropDownMenu trigger={<HomeIcon />} variant={'profiledrop'}>
        <DropDownItem
          el={{ email: 'ribragimov2003@gmail.com', icon: <HomeIcon />, title: 'Ivan' }}
          onSelect={() => {
            console.log('profile')
          }}
        />
        <DropDownItem
          el={{ icon: <HomeIcon />, title: 'Ivan' }}
          onSelect={() => {
            console.log('profile')
          }}
        />
        <DropDownItem
          el={{ icon: <ExitIcon />, title: 'Log out' }}
          onSelect={() => {
            console.log('log out')
          }}
        />
      </DropDownMenu>
      <Avatar />
    </div>
  )
}

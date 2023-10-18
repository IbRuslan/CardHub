import { Header, TabSwitcher, TabTrigger } from '@/components/ui'

export function App() {
  const onChangeSelect = (select: string) => {
    console.log(select)
  }

  return (
    <div>
      <Header />
      <div>
        <TabSwitcher defaultValue={'tab2'} onChange={onChangeSelect} title={'Show packs cards'}>
          <TabTrigger title={'My Cards'} value={'tab1'} />
          <TabTrigger title={'All Cards'} value={'tab2'} />
        </TabSwitcher>
      </div>
    </div>
  )
}

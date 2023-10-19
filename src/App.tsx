import { useState } from 'react'

import {
  Header,
  RadioGroupItem,
  SuperRadioGroup,
  SuperSlider,
  TabSwitcher,
  TabTrigger,
} from '@/components/ui'

export function App() {
  const onChangeSelect = (select: string) => {
    console.log(select)
  }

  const [minCards, setMinCards] = useState(0)
  const [maxCards, setMaxCards] = useState(50)
  const [rangeValue, setRangeValue] = useState([minCards, maxCards])

  const handleSliderCommitted = (value: number[]) => {
    setMinCards(value[0])
    setMaxCards(value[1])
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
      <div>
        <SuperRadioGroup defaultValue={'not'} onChange={onChangeSelect}>
          <RadioGroupItem title={'Did not know'} value={'not'} />
          <RadioGroupItem title={'Forgot'} value={'Forgot'} />
          <RadioGroupItem title={'Knew the answer'} value={'know'} />
        </SuperRadioGroup>
      </div>
      <div>
        <SuperSlider
          max={50}
          min={0}
          onValueChange={setRangeValue}
          onValueCommit={handleSliderCommitted}
          value={rangeValue}
        />
      </div>
    </div>
  )
}

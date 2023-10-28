import { useState } from 'react'

import {
  Button,
  Header,
  Modal,
  Pagination,
  RadioGroupItem,
  SuperRadioGroup,
  SuperSlider,
  TabSwitcher,
  TabTrigger,
} from '@/components/ui'

export function AppTest() {
  const onChangeSelect = (select: string) => {
    console.log(select)
  }

  const [minCards, setMinCards] = useState(0)
  const [maxCards, setMaxCards] = useState(50)
  const [rangeValue, setRangeValue] = useState([minCards, maxCards])
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(5)
  const [page, setPage] = useState(1)

  const totalPage = 100

  const changePageHandler = (page: number, value: number) => {
    setPage(page)
    setValue(value)
  }

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
      <div>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Add New Pack
        </Button>
        <Modal
          onClickSetChanges={() => {}}
          onOpenChange={setOpen}
          open={open}
          titleForButton={'Add New Pack'}
          titleModal={'Add New Pack'}
        >
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa\n' +
            'Select-box\n' +
            'Select-box\n' +
            'Input\n' +
            'Input\n' +
            'Input\n' +
            'Input\n' +
            'Check-box\n' +
            'Select-box\n' +
            'Select-box\n' +
            'Question:\n' +
            'Change Cover\n' +
            'Answer:\n' +
            'Change Cover\n' +
            'Input\n' +
            'Input\n' +
            'Check-box'}
        </Modal>
      </div>
      <div>
        <Pagination
          onChangePage={changePageHandler}
          page={page}
          select
          totalCount={totalPage}
          value={value}
        />
      </div>
    </div>
  )
}

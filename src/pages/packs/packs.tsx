import {
  Button,
  Pagination,
  SuperSlider,
  TabSwitcher,
  TabTrigger,
  TextField,
  Typography,
} from '@/components/ui'

export const Packs = () => {
  const totalCount = 100
  const page = 1
  const value = 5
  const changePageHandler = (page: number, value: number) => {}

  return (
    <div>
      <div>
        <div>
          <Typography as={'h1'} variant={'large'}>
            Packs list
          </Typography>
        </div>
        <div>
          <Button variant={'primary'}>Add New Pack</Button>
        </div>
      </div>
      <div>
        <TextField></TextField>
        <TabSwitcher defaultValue={'tab2'} onChange={() => {}} title={'Show packs cards'}>
          <TabTrigger title={'my'} value={'tab1'} />
          <TabTrigger title={'all'} value={'tab2'} />
        </TabSwitcher>
        <SuperSlider
          max={50}
          min={0}
          onValueChange={() => {}}
          onValueCommit={() => {}}
          value={[]}
        />
        <Button variant={'secondary'}>Clear Filter</Button>
      </div>
      <Pagination
        onChangePage={changePageHandler}
        page={page}
        select
        totalCount={totalCount}
        value={value}
      />
    </div>
  )
}

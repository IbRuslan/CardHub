import { useState } from 'react'

import { PacksTable } from '@/components/decks/packs-table'
import {
  Button,
  Pagination,
  SuperSlider,
  TabSwitcher,
  TabTrigger,
  TextField,
  Typography,
} from '@/components/ui'
import { useGetDecksQuery } from '@/services/base-api.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const Packs = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [deckToDeleteId, setDeckToDeleteId] = useState<null | string>(null)
  const [deckToEditId, setDeckToEditId] = useState<null | string>(null)

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectDecksCurrentPage)

  const currentUserId = 'f2be95b9-4d07-4751-a775-bd612fc9553a'
  const authorId = currentTab === 'my' ? currentUserId : undefined

  const { data: decks } = useGetDecksQuery({
    authorId,
    currentPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: search,
  })

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
      <PacksTable
        currentUserId={currentUserId}
        decks={decks?.items}
        onDeleteClick={setDeckToDeleteId}
        onEditClick={setDeckToEditId}
      />
      <Pagination
        onChangePage={changePageHandler}
        page={currentPage}
        select
        totalCount={decks?.pagination?.totalPages || 1}
        value={value}
      />
    </div>
  )
}

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
import {
  selectDecksCurrentPage,
  selectDecksCurrentTab,
  selectDecksMaxCards,
  selectDecksMinCards,
  selectDecksSearch,
} from '@/services/packs/packs.selectors'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/packs/packs.service'
import { decksSlice } from '@/services/packs/packs.slice'
import { Tab } from '@/services/packs/packs.types'
import { useAppDispatch, useAppSelector } from '@/services/store'

export const Packs = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [deckToDeleteId, setDeckToDeleteId] = useState<null | string>(null)
  const [deckToEditId, setDeckToEditId] = useState<null | string>(null)

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectDecksCurrentPage)
  const currentTab = useAppSelector(selectDecksCurrentTab)
  const minCards = useAppSelector(selectDecksMinCards)
  const maxCards = useAppSelector(selectDecksMaxCards)
  const search = useAppSelector(selectDecksSearch)
  const setCurrentPage = (page: number) => dispatch(decksSlice.actions.setCurrentPage(page))
  const setMinCards = (minCards: number) => dispatch(decksSlice.actions.setMinCards(minCards))
  const setMaxCards = (maxCards: number) => dispatch(decksSlice.actions.setMaxCards(maxCards))
  const setSearch = (search: string) => dispatch(decksSlice.actions.setSearch(search))
  const setCurrentTab = (tab: Tab) => dispatch(decksSlice.actions.setCurrentTab(tab))

  const resetFilters = () => {
    dispatch(decksSlice.actions.resetFilters())
    setRangeValue([0, decks?.maxCardsCount || undefined])
  }

  const [rangeValue, setRangeValue] = useState([minCards, maxCards])

  const handleSliderCommitted = (value: number[]) => {
    setMinCards(value[0])
    setMaxCards(value[1])
  }

  const currentUserId = 'f2be95b9-4d07-4751-a775-bd612fc9553a'
  const authorId = currentTab === 'my' ? currentUserId : undefined

  const { data: decks } = useGetDecksQuery({
    authorId,
    currentPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: search,
  })

  const showConfirmDeleteModal = !!deckToDeleteId
  const deckToDeleteName = decks?.items?.find(deck => deck.id === deckToDeleteId)?.name

  const deckToEdit = decks?.items?.find(deck => deck.id === deckToEditId)

  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const openCreateModal = () => setShowCreateModal(true)

  const value = 5
  const changePageHandler = (page: number, value: number) => {
    setCurrentPage(page)
  }

  if (!decks) {
    return <div>loading...</div>
  }

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
        <TextField
          onValueChange={setSearch}
          placeholder={'Search'}
          search
          value={search}
        ></TextField>
        <TabSwitcher
          defaultValue={currentTab}
          onChange={value => setCurrentTab(value as Tab)}
          title={'Show packs cards'}
        >
          <TabTrigger title={'My packs'} value={'my'} />
          <TabTrigger title={'All packs'} value={'all'} />
        </TabSwitcher>
        <SuperSlider
          max={decks?.maxCardsCount || 0}
          min={0}
          onValueChange={setRangeValue}
          onValueCommit={handleSliderCommitted}
          value={rangeValue}
        />
        <Button onClick={resetFilters} variant={'secondary'}>
          Clear Filter
        </Button>
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

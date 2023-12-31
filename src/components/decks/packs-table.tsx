import { Link } from 'react-router-dom'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import {
  Button,
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components/ui'
import { Deck } from '@/services/packs/packs.types'
import { formatDate } from '@/utils/format-date'

import s from './packs-table.module.scss'
const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author',
    title: 'Created By',
  },
  {
    key: 'actions',
    title: '',
  },
]

type Props = {
  currentUserId: string
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
}
export const PacksTable = ({ currentUserId, decks, onDeleteClick, onEditClick }: Props) => {
  const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {decks?.map(deck => (
          <TableRow key={deck.id}>
            <TableCell>
              <div className={s.nameDeck}>
                {deck.cover ? <img alt={'img'} className={s.cover} src={deck.cover} /> : ''}
                <Typography as={Link} to={`/decks/${deck.id}`} variant={'body2'}>
                  {deck.name}
                </Typography>
              </div>
            </TableCell>
            <TableCell>{deck.cardsCount}</TableCell>
            <TableCell>{formatDate(deck.updated)}</TableCell>
            <TableCell>{deck.author.name}</TableCell>
            <TableCell>
              <div className={s.iconsContainer}>
                <Button as={Link} to={`/decks/${deck.id}/learn`} variant={'icon'}>
                  <PlayCircleOutline />
                </Button>
                {deck.author.id === currentUserId && (
                  <>
                    <Button onClick={handleEditClick(deck.id)} variant={'icon'}>
                      <Edit2Outline />
                    </Button>
                    <Button onClick={handleDeleteClick(deck.id)} variant={'icon'}>
                      <TrashOutline />
                    </Button>
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

import { Typography } from '@/components/ui'
import { Meta } from '@storybook/react'

import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeadCell, TableRow } from './'

export default {
  component: Table,
  title: 'Components/Table',
} as Meta<typeof Table>

export const Default = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Название</TableHeadCell>
            <TableHeadCell align={'center'}>Описание</TableHeadCell>
            <TableHeadCell>Ссылка</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Вид</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography>
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>🦎</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>
              Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
              источник
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>✨</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const Empty = {
  render: () => <TableEmpty />,
}

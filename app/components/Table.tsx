'use client'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { Episode } from '@/interface';
import { convertDateFormat, convertMiliseconds } from '../utils';

type EpisodeTableData = Pick<Episode, 'trackId' | 'trackName' | 'releaseDate' | 'trackTimeMillis'>
export interface Episodes {
  resultCount: number;
  results: Pick<Episode, 'trackId' | 'trackName' | 'releaseDate' | 'trackTimeMillis'>[]
}
interface ICustomizedTables {
  data: Episodes
  podcastId: string
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({ data, podcastId }: ICustomizedTables) {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.slice(1).map((row: EpisodeTableData) => (
            <StyledTableRow key={row?.trackId}>
              <StyledTableCell component="th" scope="row">
                <Link href={`/podcast/${podcastId}/episode/${row?.trackId}`}>
                  {row?.trackName}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{convertDateFormat(row?.releaseDate)}</StyledTableCell>
              <StyledTableCell align="right">{convertMiliseconds(row?.trackTimeMillis)}</StyledTableCell>
            </StyledTableRow>
          ))}
          {data.results.length <= 1 && (
            <StyledTableRow>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">No data</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
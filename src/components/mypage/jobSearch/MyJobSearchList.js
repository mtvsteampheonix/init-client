import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box} from '@mui/system';
import {useNavigate} from 'react-router-dom';

const columns = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: '기업명', headerName: '기업명', width: 300},
  {field: '게시상태', headerName: '게시상태', width: 130}
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
];

const getRowId = (params) => params.id;

const rows = [
  {id: 1, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 2, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 3, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 4, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 5, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 6, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 7, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 8, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 9, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 10, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 11, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 12, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 13, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 14, 기업명: '메타버스아카데미', 게시상태: 'N'}
];

export default function MyJobSearchList() {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate('../details-jobsearch');
  };

  // const selectedRowDelete = () =>{
  //   console.log('selectedRowDelete test')
  // }
  return (
    <>
      <Box style={{width: '100%'}}>
        <DataGrid
          //getRowId={}
          onRowClick={toDetails} //row클릭시 이벤트발생시키는 prop
          rows={rows}
          columns={columns}
          autoHeight={true}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection // 체크박스가 필요한 경우에 사용할것.
          //onSelectionModelChange={selectedRowDelete}//체크된상태다룰때
        />
      </Box>
    </>
  );
}

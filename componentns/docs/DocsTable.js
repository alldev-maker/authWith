import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from "@mui/material";
import FilterNoneIcon from '@mui/icons-material/FilterNone';

function TableNameElement({ title, description }) {
  return <div>
    <p style={{
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#027A48'
    }}>{title}</p>
    <p style={{
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#667085',
    }}>{description}</p>
  </div>
}
function TableDescriptionElement({ title, description }) {
  return <div>
    <p style={{
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#101828'
    }}>{title}</p>
    <p style={{
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
      color: '#667085',
    }}>{description}</p>
  </div>
}

function createData(name, description) {
  return {
    name,
    description,
    parameter1:
    {
      key: 'endpoint',
      nameTitle: 'endpoint',
      nameDescription: 'type:string',
      descriptionTitle: "Required",
      descriptionDetail: "Lorem ipsum dolor sit",
    },
    parameter2: [{
      key: 'code1',
      nameTitle: '202',
      nameDescription: ' ',
      descriptionTitle: " ",
      descriptionDetail: "Lorem ipsum dolor sit amet consectetur ipsum ferment",
    }, {
      key: 'code2',
      nameTitle: '202',
      nameDescription: ' ',
      descriptionTitle: " ",
      descriptionDetail: "Lorem ipsum dolor sit amet consectetur ipsum ferment",
    }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, background: '#192525' }}>
        <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', borderBottom: 'none' }}>
          <Button variant="contained" color="success" sx={{ marginLeft: '10px', marginRight: '20px' }}>
            Post
          </Button>
          <p style={{
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FFFFFF',
          }}>{`/runflow/{endpoint}/{flowid}`}</p>
          <FilterNoneIcon sx={{ marginLeft: '40px', color: '#57D47A' }} />
        </TableCell>
        <TableCell align="right" sx={{ borderBottom: 'none' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: 'white', fontSize: '18px' }}
          >
            {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0, padding: '0' }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ background: '#DBE1E8', padding: "10px", margin: '0' }}>
                Parameters
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{ background: "#ECF0F5" }}>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.parameter1.key}>
                    <TableCell component="th" scope="row">
                      {<TableNameElement title={row.parameter1.nameTitle} description={row.parameter1.nameDescription} />}
                    </TableCell>
                    <TableCell>{<TableDescriptionElement title={row.parameter1.descriptionTitle} description={row.parameter1.descriptionDetail} />}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Typography variant="h6" gutterBottom component="div" sx={{ background: '#DBE1E8', padding: "10px", margin: '0' }}>
                Parameters
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{ background: "#ECF0F5" }}>
                    <TableCell>code</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.parameter2.map(item => {
                    return <TableRow key={item.key}>
                      <TableCell component="th" scope="row" sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#027A48',
                      }}>
                        {<TableNameElement title={item.nameTitle} description={item.nameDescription} />}
                      </TableCell>
                      <TableCell sx={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#667085',
                      }}>{<TableDescriptionElement title={item.descriptionTitle} description={item.descriptionDetail} />}</TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    fat: PropTypes.number,
    parameter2: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        nameTitle: PropTypes.string,
        nameDescription: PropTypes.string,
        descriptionTitle: PropTypes.string,
        descriptionDetail: PropTypes.string,
      }),
    ),
    parameter1: PropTypes.object
  })
};

const rows = [
  createData("name1"),
  createData("name2"),
  createData("name3"),
];

export function DocsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead >
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
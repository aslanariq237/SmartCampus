import React from "react";
import IMG from './../../../images/Three.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Carousel = () => {
    function createData(
        judul_event,
        jam,
        tanggal,
        lokasi,
    ) {
        return {
            judul_event,
            jam,
            tanggal,
            lokasi,
        };
    }
    const rows = [
        createData(
            'Proto-a-Thon',
            1200,
            71023,
            'Binus@bekasi(R305)',
        ),
        createData(
            'Event1',
            1300,
            81023,
            'Binus@Kemanggisan(R305)',
        ),
        createData(
            'Event2',
            1600,
            91023,
            'Binus@Senayan(R305)',
        ),
    ]
    return (
        <div className="">
            <div className="">
                <div className="bg-grays my-20 font-roboto @container">
                    <div className="grid mx-40 @4xl:flex justify-between items-center">
                        <div className="my-3 mr-4 items-start">
                            <div className="Title">
                                <p>Today's Event</p>
                            </div>
                            <div className="">
                                <img src={IMG} className="w-96 h-72" alt="" />
                            </div>
                            {/* <div className="bg-slate-400 h-60 w-52 absolute"></div> */}
                        </div>
                        <div className="">
                            <div className="this-week">
                                <p className="ml-4">This Week</p>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Judul Event</TableCell>
                                                <TableCell align="right">Jam</TableCell>
                                                <TableCell align="right">Tanggal</TableCell>
                                                <TableCell align="right">Lokasi</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    {/* <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell> */}
                                                    <TableCell align="center">{row.judul_event}</TableCell>
                                                    <TableCell align="right">{row.jam}</TableCell>
                                                    <TableCell align="right">{row.tanggal}</TableCell>
                                                    <TableCell align="right">{row.lokasi}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className="next-week mt-4">
                                <p className="ml-4">Next Week</p>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Judul Event</TableCell>
                                                <TableCell align="right">Jam</TableCell>
                                                <TableCell align="right">Tanggal</TableCell>
                                                <TableCell align="right">Lokasi</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    {/* <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell> */}
                                                    <TableCell align="center">{row.judul_event}</TableCell>
                                                    <TableCell align="right">{row.jam}</TableCell>
                                                    <TableCell align="right">{row.tanggal}</TableCell>
                                                    <TableCell align="right">{row.lokasi}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            {/* <h2 className="text-4xl font-extrabold text-gray-700">Hi, I am Jhondoe Ncis!</h2>
                            <h3 className="text-2xl font-medium text-bg4">Am Front End Developer</h3>
                            <div className="comment mt-2 text-sm">
                                <p>saya dari keluarga lorem ipsum dolor amet dengan ini</p>
                                <p>Mengumumkan keduduka saya sebagai raja dunia</p>
                                <p className="text-xs items-end ">2016-12-12</p>
                                <button className="h-10 w-11/12 rounded-lg bg-blues mt-2 hover:bg-blue-500">Daftar Sekarang</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
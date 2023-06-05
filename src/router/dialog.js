import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import { Button, DialogActions } from '@mui/material';
import { Accordin1 } from './accordin1';
import './comparedetails.scss';
//import './According.scss';
import { useSelector, useDispatch } from 'react-redux';
import { carList, allCarDetails, carset1 } from '../redux/slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ToggleDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function ToggleDialogTitle(props) {
    const { children, onClose, ...other } = props;


    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

ToggleDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


function Dialog1() {
    const [open, setOpen] = React.useState(false);
    const [close, setClose] = useState(false)
    // console.log(close);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setClose(false)
    };


    const SelectCarsOne = useSelector(({ allDetail }) => allDetail.carset1);
    console.log([SelectCarsOne]);

    const clear = () => {
        var temp = [SelectCarsOne];
        if (close) {
            temp[0] = ''
            return temp;
        }
        return temp;
    }
    console.log(clear());
    return (
        <div>
            <div className='container-compare'>
                <div className='row-compare'>
                    {clear()[0] !== undefined && clear()[0] !== '' ? (
                        clear()?.map((v, i) =>
                        (
                            <div key={i} className='col-compare-sub'>
                                <div className='style-compare'>
                                    <img src={v?.image} alt='car' />
                                    <h4>{v?.model}</h4>
                                    <p>{v?.transmission}</p>
                                    <p>{v?.prize}</p>
                                    <p>Onwards</p>
                                </div>
                                <button className='dia-but' onClick={() => setClose(true)}>Clear</button>
                            </div>
                        )
                        )
                    ) : (
                        <div className='col-compare-sub'>
                            <img
                                src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg'
                                alt='no image'
                                onClick={handleClickOpen}
                            />
                        </div>
                    )}
                </div>
            </div>
            <ToggleDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"

                open={open}
            >
                <ToggleDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h4>Select Your Cars Brend and Model</h4>
                </ToggleDialogTitle>
                <DialogContent dividers>
                    <Accordin1 />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Ok
                    </Button>
                </DialogActions>
            </ToggleDialog>
        </div>
    );

}

Dialog1.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default Dialog1
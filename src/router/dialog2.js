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
import { Accordin2 } from './accordin2';
//import './Dialog.scss'
//import './According.scss';
import { useSelector, useDispatch } from 'react-redux';
import { allCarDetails,carList,carset1,carset2 } from '../redux/slice';
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


function Dialog2() {
    const [open, setOpen] = React.useState(false);
    const [close, setClose] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setClose(false)
    };

    const SelectCarsTwo = useSelector(({ allDetail }) => allDetail.carset2);
    console.log(SelectCarsTwo);

    const clear = () => {
        var temp = [SelectCarsTwo];
        if(close){
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
                                    <img src={v?.image} alt='car'/>
                                    <h4>{v?.model}</h4>
                                    <p>{v?.transmission}</p>
                                    <p>{v?.prize}</p>
                                    <p>Onwards</p>
                                </div>
                                <button className='dia-but' onClick={() => setClose(true)}>clear</button>

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
                    <Accordin2 />
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

Dialog2.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default Dialog2
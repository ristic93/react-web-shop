import React, { useContext } from 'react';
import FeaturedItems from '../components/FeaturedItems';
import CartContext from '../contexts/CartConxtext';
import { MdDelete } from 'react-icons/md';

// style for table material UI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);


    let total = cart.reduce((acc, curVal) => {
        return acc + curVal.qty * curVal.price;
    }, 0);

    const removeItem = (idx) => {
        let tempCart = [...cart];
        tempCart.splice(idx, 1);
        setCart([...tempCart]);
    };

    const clearCart = () => {
        setCart([]);
    };



    // style for table 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontWeight: 'bold'
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            fontWeight: 'bold'
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

    return (
        <section className='cart'>
            <article className='heading'>
                <h2>#Cart</h2>
            </article>
            <article className='container'>
                {cart.length > 0
                    ?
                    <>
                        <h2 className="total-title">Total bill: ${total}</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>
                                            Product
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            Name
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            Unit Price
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            Qty
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            Total Price
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            Remove
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.map((item, idx) => {
                                        return (
                                            <StyledTableRow key={item.id}>
                                                <StyledTableCell>
                                                    <img src={item.img} height="40px" width="40px" />
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    ${item.price}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {item.qty}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    ${item.price * item.qty}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <button style={{ padding: '5px', background: '#c92121', margin: '-5px', fontSize: '1.2rem' }} onClick={() => removeItem(idx)}><MdDelete /></button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className='buttons'>
                            <button style={{ padding: '10px', background: '#c92121', fontSize: '0.8rem' }} onClick={() => clearCart()}>Clear cart</button>
                        </div>
                    </>
                    :
                    <h2>The cart is empty! Add something to cart!</h2>
                }
            </article>
            <FeaturedItems />
        </section>
    );
};

export default Cart;
import React, { useState, useEffect } from 'react';
import useStyles from './style';
import Header from '../../Components/Header';
import axios from 'axios';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import {
	Container,
	Button,
	Grid,
	Card,
	Typography,
	TextField,
	InputAdornment,
} from '@material-ui/core';

const Layout = () => {
	const classes = useStyles();
	const [invoices, setInvoices] = useState([]);

	useEffect(() => {
		async function getInvoices() {
			const res = await axios.get(`/api/api/invoice`);
			if (!res.success) {
				setInvoices(res.data.data.invoice);
				console.log(res);
			}
		}
		getInvoices();
	}, []);

	const searchInvoice = async (e) => {
		const search = e.target.value;
		let res;
		if (search) {
			res = await axios.get(`/api/api/search`);

			if (!res.success) {
				setInvoices(res.data.data.invoice);
				console.log(res);
			}
		} else {
			res = await axios.get(`/api/api/invoice`);
			if (!res.success) {
				setInvoices(res.data.data.invoice);

				console.log(res);
			}
		}
	};
	return (
		<div>
			<Header />

			<Container className={classes.container} maxWidth='lg'>
				<Typography variant='h5' className={classes.InvoiceButton} align='left'>
					Invoices
				</Typography>
				<div className={classes.BillAddButton}>
					<Button
						variant='contained'
						href='/addInvoices'
						startIcon={<AddBoxIcon />}
						className={classes.button}>
						Add Invoice
					</Button>
				</div>
				<div className={classes.SearchHolder}>
					<TextField
						name='Search'
						className={classes.textField}
						variant='outlined'
						placeholder='Search Your Invoices'
						onChange={searchInvoice}
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</div>
				<Container className={classes.cardGrid} maxWidth='xl'>
					<Grid container spacing={3}>
						{invoices &&
							invoices.map((invoice, index) => (
								<Grid item key={index} xs={12} md={4} xl={4} lg={4}>
									<Card>
										<div>
											<img
												src={invoice.image}
												className={classes.image}
												alt=''
											/>
										</div>

										<div className={classes.action}>
											<Grid container spacing={3}>
												<Grid item xs={6} sm={6} xl={6} lg={6}>
													<Typography variant='h6'>
														{' '}
														{invoice.productName}{' '}
													</Typography>
												</Grid>
												<Grid item xs={6} sm={6} xl={6} lg={6}>
													<Typography variant='h6' component='p'>
														${invoice.price}
													</Typography>
												</Grid>
											</Grid>
											<Typography variant='h6'> {invoice.date} </Typography>
										</div>
									</Card>
								</Grid>
							))}
					</Grid>
				</Container>
			</Container>
		</div>
	);
};
export default Layout;

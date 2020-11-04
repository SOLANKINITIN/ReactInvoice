import React, { useState } from 'react';
import useStyles from './style';
import axios from 'axios';
import { storage } from '../../firebase/index';
import Header from '../../Components/Header';
import { useHistory } from 'react-router-dom';
import {
	Container,
	TextField,
	Button,
	Typography,
	Grid,
} from '@material-ui/core';

const Layout = () => {
	const classes = useStyles();
	const [state, setState] = useState({
		productName: '',
		date: null,
		price: 0,
	});
	const [image, setImage] = useState();
	const [url, setUrl] = useState();
	const [progress, setProgress] = useState(0);

	const history = useHistory();
	const [isSubmitting, setSubmitting] = useState(false);

	const handleFileUploadChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			console.log(e.target.files[0]);
		}
	};
	const handleFileUpload = (e) => {
		const uploadTask = storage.ref('images/' + image.name).put(image);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(progress);
			},
			(error) => {
				console.log(error);
			},
			() => {
				storage
					.ref('images')
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						console.log(url);
						setUrl(url);
					});
			}
		);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const onClick = async (e) => {
		console.log({ state });
		try {
			setSubmitting(true);
			const body = {
				productName: state.productName,
				price: state.price,
				date: state.date,
				image: url,
			};

			await axios
				.post(`/api/api/invoice`, body)
				.then((res) => {
					console.log(res);
					console.log(res.data);
					history.push('/');
				});
		} catch (err) {
		} finally {
			setSubmitting(false);
			setState({
				productName: '',
				date: '',
				price: '',
			});
			setUrl('');
			setProgress('');
		}
	};

	return (
		<div>
			<Header title='Add Invoices' />
			<Container className={classes.container} maxWidth='md'>
				<Typography variant='h5' align='left'>
					Add Invoice
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12} lg={12}>
						<TextField
							name='productName'
							id='productName'
							className={classes.textField}
							variant='outlined'
							label='Product Name'
							fullWidth
							value={state.productName}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField
							name='price'
							value={state.price}
							id='price'
							onChange={handleChange}
							className={classes.textField}
							variant='outlined'
							label='Price'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField
							name='date'
							type='date'
							id='date'
							format='MM/dd/yyyy'
							value={state.date}
							onChange={handleChange}
							className={classes.textField}
							variant='outlined'
							label='Date'
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<TextField
							type='file'
							onChange={handleFileUploadChange}
							name='Select invoices Image'
							className={classes.textField}
							variant='outlined'
							fullWidth
						/>
					</Grid>

					<Grid item xs={12} md={4} lg={4}>
						<Button
							fullWidth
							style={{ marginTop: '1rem' }}
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={handleFileUpload}>
							Upload Image
						</Button>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<progress className={classes.progress} value={progress} />
					</Grid>
				</Grid>
				<Button
					fullWidth
					style={{ marginTop: '1rem' }}
					variant='contained'
					color='primary'
					value={isSubmitting}
					className={classes.submit}
					onClick={onClick}>
					Add Invoice
				</Button>
			</Container>
		</div>
	);
};
export default Layout;
